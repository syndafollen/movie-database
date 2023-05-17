import { Box, Button } from "@mui/material";
import { SortByPopularityProps } from './types'
import { DescIcon, AscIcon } from "../Icons";

export const SortByPopularity = ({ toggleSort, sortBy } : SortByPopularityProps) => (
    <Box>
      <Button
        variant="contained"
        onClick={toggleSort}
      >
        {
          sortBy === 'asc' ? <AscIcon fill="#FFFFFF" /> : <DescIcon fill="#FFFFFF" />
        }
      </Button>
    </Box>
);

