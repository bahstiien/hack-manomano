import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
export default function BtnUsers({ content, icon }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" size="medium" color="primary" aria-label="add">
        {icon}
        {content}
      </Fab>
    </Box>
  );
}
