import styles from "./AddToFavorite.module.scss";
import { AddToFavProps } from "./types";
import { FavIcon } from "../Icons";

export const AddToFavorite = ({
  id,
  handleAddToFavorite,
  isFavorite,
}: AddToFavProps) => (
  <button onClick={() => handleAddToFavorite(id)}>
    <FavIcon />
  </button>
);
