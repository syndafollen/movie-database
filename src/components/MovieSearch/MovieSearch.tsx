import { Input  } from "@mui/joy";
import styles from "./MovieSearch.module.scss";
import { SearchProps } from './types'

export const MovieSearch = ({ searchInputValue, handleSearchChange }: SearchProps) => (
  <Input 
    className={styles.input}
    variant="outlined"
    onChange={handleSearchChange}
    placeholder="Search here!"
    value={searchInputValue}
  />
);
