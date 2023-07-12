import { CardProps } from "./types";
import { AddToFavorite } from "../AddToFavorite/AddToFavorite";

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
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <div>
            <AddToFavorite
              id={id}
              handleAddToFavorite={handleAddToFavorite}
              isFavorite={isFavorite}
            />
          </div>
          <img src={posterUrl} width="150" />
        </div>
        <div>
          <h1>{description}</h1>
        </div>
        {releaseDate && <h1>Release date: {releaseDate}</h1>}{" "}
        {/* jestli pred && true zobraz po && */}
      </div>
    </div>
  );
}
