import { Box, Button, Typography } from "@mui/joy";
import { FooterProps } from "./types";

export const Footer = ({ text, onSave }: FooterProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
      position: "fixed",
      height: 50,
      width: "100vw",
      bottom: 0,
      zIndex: 99,
      boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      padding: 0,
      margin: 0,
    }}
  >
    <Typography sx={{ fontSize: "25px", marginRight: "10px" }}>
      {text}
    </Typography>
    <Button sx={{ fontSize: "25px", fontWeight: "bold" }} onClick={onSave}>
      Yes
    </Button>
  </Box>
);
