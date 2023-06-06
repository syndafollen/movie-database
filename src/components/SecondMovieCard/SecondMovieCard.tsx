import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { SecondCardProps } from "./types";
import { AddToFavorite } from "../AddToFavorite";

export function SecondMovieCard({
  title,
  posterPath,
  releaseDate,
  id,
  handleAddToFavorite,
  isFavorite,
}: SecondCardProps) {
  const posterUrl =
    posterPath === null
      ? "https://cdn.britannica.com/25/172925-050-DC7E2298/black-cat-back.jpg"
      : `https://image.tmdb.org/t/p/original${posterPath}`;

  return (
    <>
      <Card
        style={{ border: "none", boxShadow: "none" }}
        sx={{
          width: 150,
          height: 225,
          borderRadius: "8px",
          backgroundImage: `url(${posterUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box display="flex" justifyContent="flex-end" pt={1} pr={1}>
          <AddToFavorite
            id={id}
            handleAddToFavorite={handleAddToFavorite}
            isFavorite={isFavorite}
          />
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          wordWrap: "anywhere",
          textAlign: "left",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{releaseDate}</Typography>
      </Box>
    </>
  );
}
