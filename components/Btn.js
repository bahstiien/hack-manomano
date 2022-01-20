import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
export default function BtnUsers({ content, icon,onClick }) {
  return (
    <Box onClick={onClick}>
      <Fab variant="extended" size="medium" color="primary" aria-label="add">
        {icon}
        {content}
      </Fab>
    </Box>
  );
}
