import { Button, Box, Typography } from '@mui/material'
import { PaginationProps } from './types'

export const Pagination = ({ page, onPrevClick, onNextClick }: PaginationProps) => {    
  return (
    <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
        <Button variant='contained' onClick={onPrevClick} disabled={page === 1 ? true : false}>Prev</Button>
        <Typography>{page}</Typography>
        <Button variant='contained' onClick={onNextClick}>Next</Button>
    </Box>
  )
}
