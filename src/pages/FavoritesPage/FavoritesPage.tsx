import { Link } from "react-router-dom";
import "../MainPage/MainPage.css";
import { remove } from "../../redux/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../../components";

export const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id: number) => {
    const action = remove(id);
    console.log(action);
    dispatch(action);
  };

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div>
        {favorites.map((movie: CardProps) => (
          <div key={movie?.id}>
            <MovieCard
              title={movie?.title}
              releaseDate={movie?.release_date}
              posterPath={movie?.poster_path}
              id={movie?.id}
              handleAddToFavorite={handleRemoveFavorite}
              isFavorite={true}
              description={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
