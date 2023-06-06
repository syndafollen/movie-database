import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { SecondMovieCard } from "../../components";
import "../../App.css";
import { useState, useEffect } from "react";
import { remove } from "../../redux/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";



export const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  const handleRemoveFavorite = (id: number) => {
    const action = remove(id)
    console.log(action)
    dispatch(action)
  };
 
  return (
    <Grid container spacing={2} justifyContent="flex-end">
      <Link to="/">
        <Button>Back</Button>
      </Link>
      <Grid item container spacing={2} direction="row" xs={12}>
        {favorites.map((movie) => (
          <Grid item xs={12} sm={6} lg={1.5} key={movie?.id}>
            <SecondMovieCard
              title={movie?.title}
              releaseDate={movie?.release_date}
              posterPath={movie?.poster_path}
              id={movie?.id}
              handleAddToFavorite={handleRemoveFavorite}
              isFavorite={true}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
