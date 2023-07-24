import { SortByPopularityProps } from "./types";
import { DescIcon, AscIcon } from "../Icons";
import './SortByPopularity.scss';

export const SortByPopularity = ({ toggleSort, sortBy }: SortByPopularityProps) => (
  <div className="sort-by-popularity">
    Sort by popularity
    <button onClick={toggleSort}>
      {sortBy === "asc" ? (
        <AscIcon fill="#FFFFFF" />
      ) : (
        <DescIcon fill="#FFFFFF" />
      )}
    </button>
  </div>
);
