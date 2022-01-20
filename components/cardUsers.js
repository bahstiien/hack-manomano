import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardUsers({ src, alt, typo1, typo2 }) {
  const [count, setCount] = useState(0);

  return (
    <Card sx={{ minWidth: 370 }}>
      <CardContent className="columns-2">
        <Image
          src={src}
          alt={alt}
          width="150"
          height="150"
          property="responsive"
        />
        <Typography
          variant="h5"
          component="div"
          className="border-black border-2 flex w-32 justify-between items-center px-2 cursor-pointer mb-12"
        >
          <p onClick={() => setCount(count + 1)}> +</p>
          {count}

          <p onClick={() => setCount(count - 1)}> -</p>
        </Typography>
        <Typography>
          <div className="mt-4">
            <p className="text-xs">{typo1}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
