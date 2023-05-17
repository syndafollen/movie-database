import React from "react";
import { LanguageButtonProps } from "./types";
import { Button, Box, Typography } from "@mui/material";

export const LanguageButton = ({
  languageName,
  language,
  onLanguageChange,
}: LanguageButtonProps) => {
  return (
    <Box>
      <Button variant="contained" onClick={() => onLanguageChange(languageName)}>
        <Typography>{languageName}</Typography>
      </Button>
    </Box>
  );
};
