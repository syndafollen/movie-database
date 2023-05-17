import { CardProps } from "./types";
import { Card, Box, Typography } from "@mui/material";
import styles from './MovieCard.module.css'
import { AddToFavorite } from "../AddToFavorite/AddToFavorite";

export function MovieCard({ title, posterPath, description, releaseDate, id, handleAddToFavorite, isFavorite }: CardProps) {
  const posterUrl = posterPath === null ? 'https://i.stack.imgur.com/KiVLT.png' : `https://image.tmdb.org/t/p/original${posterPath}`

  return (
    <Card variant="outlined" sx={{
      height: '600px',
      paddingTop: 2,
      paddingLeft: 2,
      paddingRight: 2
    }}>
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        maxHeight={500}
      >
        <Typography variant="h6">{title}</Typography>
        <Box>
          <AddToFavorite id={id} handleAddToFavorite={handleAddToFavorite} isFavorite={isFavorite} />
        </Box>
        <Box display="flex" justifyContent="center"><img src={posterUrl} width="150" /></Box>
        <Box sx={{
          marginBottom: 2
        }}>
          <Typography variant="body1" className={styles.description}>{description}</Typography>
        </Box>
        {releaseDate && <Typography variant="body1">Release date: {releaseDate}</Typography>} {/* jestli pred && true zobraz po && */} 
      </Box>
    </Card>
  );
}
