import { LanguageButtonProps } from "./types";
import { Button, Box, Typography } from "@mui/joy";

export const LanguageButton = ({
  languageName,
  language,
  onLanguageChange,
}: LanguageButtonProps) => (
    <Box>
      <Button variant="outlined" onClick={() => onLanguageChange(languageName)} disabled={language.includes(languageName)}>
        <Typography>{languageName}</Typography>
      </Button>
    </Box>
  );
