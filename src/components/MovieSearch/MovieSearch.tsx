import { TextField } from "@mui/material";
import styles from "./MovieSearch.module.scss";
import { SearchProps } from './types'

export const MovieSearch = ({ searchInputValue, handleSearchChange }: SearchProps) => (
  <TextField
    className={styles.input}
    variant="outlined"
    onChange={handleSearchChange}
    placeholder="Search here!"
    value={searchInputValue}
  />
);
