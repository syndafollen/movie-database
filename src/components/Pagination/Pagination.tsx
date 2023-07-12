import { PaginationProps } from "./types";

export const Pagination = ({
  page,
  onPrevClick,
  onNextClick,
}: PaginationProps) => {
  return (
    <div>
      <button onClick={onPrevClick} disabled={page === 1 ? true : false}>
        Prev
      </button>
      <h1>{page}</h1>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};
