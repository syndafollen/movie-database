import { CardProps } from "./types";
import { AddToFavorite } from "../AddToFavorite/AddToFavorite";
import './MovieCard.scss'

export function MovieCard({
  title,
  posterPath,
  description,
  releaseDate,
  id,
  handleAddToFavorite,
  isFavorite,
}: CardProps) {
  const posterUrl =
    posterPath === null
      ? "https://i.stack.imgur.com/KiVLT.png"
      : `https://image.tmdb.org/t/p/original${posterPath}`;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div>
        <AddToFavorite
          id={id}
          handleAddToFavorite={handleAddToFavorite}
          isFavorite={isFavorite}
        />
      </div>
      <img src={posterUrl} width="150" />
      <div className="information">
        <h3>{description}</h3>
        {releaseDate && <h3>Release date: {releaseDate}</h3>}{" "}
        {/* jestli pred && true zobraz po && */}
      </div>
    </div>
  );
}
