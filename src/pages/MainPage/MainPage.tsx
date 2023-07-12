import { ChangeEvent, useEffect, useState, useMemo } from "react";
import "./MainPage.css";
import {
  MovieSearch,
  Pagination,
  SortByPopularity,
  MovieCard,
  LanguageButton,
  Maybe,
  Preloader,
} from "../../components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../redux/slices/favoritesSlice";
import { fetchMovies } from "../../redux/slices/moviesSlice";
import { API_URL } from "../../constants";
import axios from "axios";
import { Footer } from "../../components/Footer/Footer";

export const MainPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const movies = useSelector((state) => state.movies);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("asc");
  const [language, setLanguage] = useState("ru-RU");

  const token = localStorage.getItem("token");

  const handleSaveToFavorites = () => {
    axios.post(`${API_URL}/movies`, favorites, {
      headers: {
        "x-auth-token": token,
      },
    });
  };

  const handleAddToFavorite = (id: number) => {
    const favoriteMoviesArray = favorites.filter(
      ({ id: movieId }) => movieId === id
    );
    const movieToAdd = movies.movies.filter(
      ({ id: movieId }) => movieId === id
    )[0];

    if (favoriteMoviesArray.length === 0) {
      dispatch(add(movieToAdd));
    } else {
      dispatch(remove(id));
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event?.target?.value);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleChangeSort = () => {
    const sortByValue = sortBy === "asc" ? "desc" : "asc";
    setSortBy(sortByValue);
  };

  const handleChangeLanguage = (languageName: string) => {
    switch (languageName) {
      case "EN":
        setLanguage("en-EN");
        break;

      case "CZ":
        setLanguage("cz-CZ");
        break;

      case "RU":
        setLanguage("ru-RU");
        break;
    }
  };

  const filteredBySearch = useMemo(() => {
    return movies.movies.filter((movie) => {
      const words = movie?.title?.toLowerCase().split(" ");

      return words?.some((word: string) =>
        word?.startsWith(searchInputValue?.split(" ")[0].toLowerCase())
      );
    });
  }, [searchInputValue, movies]);

  useEffect(() => {
    dispatch(fetchMovies({ page, language, sortBy }));
  }, [page, sortBy, language, dispatch]);

  return (
    <div>
      <Maybe when={favorites.length > 0}>
        <Footer text="Save changes?" onSave={handleSaveToFavorites} />
      </Maybe>

      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <LanguageButton
        language={language}
        languageName="EN"
        onLanguageChange={handleChangeLanguage}
      />
      <LanguageButton
        language={language}
        languageName="CZ"
        onLanguageChange={handleChangeLanguage}
      />
      <LanguageButton
        language={language}
        languageName="RU"
        onLanguageChange={handleChangeLanguage}
      />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/reg">
        <button>Register</button>
      </Link>

      <div>
        <div>
          <MovieSearch
            handleSearchChange={handleSearchChange}
            searchInputValue={searchInputValue}
          />
          <Pagination
            page={page}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
          <SortByPopularity toggleSort={handleChangeSort} sortBy={sortBy} />
        </div>
        <Maybe when={!movies.isLoading} fallBack={<Preloader />}>
          <Maybe
            when={filteredBySearch.length !== 0}
            fallback={<h3>NO RESULTS</h3>}
          >
            <div>
              {filteredBySearch.map((movie) => (
                <div key={movie?.id}>
                  <MovieCard
                    id={movie?.id}
                    title={movie?.title}
                    releaseDate={movie?.release_date}
                    posterPath={movie?.poster_path}
                    handleAddToFavorite={handleAddToFavorite}
                    isFavorite={
                      favorites.filter(({ id }) => movie?.id === id).length !==
                      0
                    }
                    description={""}
                  />
                </div>
              ))}
            </div>
          </Maybe>
        </Maybe>
      </div>
    </div>
  );
};
