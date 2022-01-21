import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function ActionAreaCard({ src, typo1 }) {
  return (
    <Card sx={{ width: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"
          width="30"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="text-center"
            gutterBottom
            variant="h5"
            component="div"
          >
            {typo1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
