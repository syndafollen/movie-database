import { SortByPopularityProps } from "./types";
import { DescIcon, AscIcon } from "../Icons";

export const SortByPopularity = ({
  toggleSort,
  sortBy,
}: SortByPopularityProps) => (
  <div>
    <button onClick={toggleSort}>
      {sortBy === "asc" ? (
        <AscIcon fill="#FFFFFF" />
      ) : (
        <DescIcon fill="#FFFFFF" />
      )}
    </button>
  </div>
);
