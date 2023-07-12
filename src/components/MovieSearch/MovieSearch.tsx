import styles from "./MovieSearch.module.scss";
import { SearchProps } from "./types";

export const MovieSearch = ({
  searchInputValue,
  handleSearchChange,
}: SearchProps) => (
  <input
    className={styles.input}
    onChange={handleSearchChange}
    placeholder="Search here!"
    value={searchInputValue}
  />
);
