import styles from "./AddToFavorite.module.scss";
import { Button } from "@mui/joy";
import { AddToFavProps } from "./types";
import { FavIcon } from "../Icons";

export const AddToFavorite = ({
  id,
  handleAddToFavorite,
  isFavorite,
}: AddToFavProps) => (
  <Button
    variant="solid"
    onClick={() => handleAddToFavorite(id)}
    sx={{
      "&, &:hover": { backgroundColor: "white" },
      outline: "none !important",
      padding: "none !important",
      borderRadius: "99px",
      // minWidth: '32px',
      width: "64px",
      height: "48px",
      // boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }}
    className={isFavorite ? styles.isFavorite : styles.favButton}
  >
    <FavIcon />
  </Button>
);
