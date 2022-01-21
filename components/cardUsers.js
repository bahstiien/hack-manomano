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

export default function CardUsers({ src, alt, typo1, countPlus, price }) {
  return (
    <>
      <Card className="rounded-xl shadow-2xl" sx={{ minWidth: 370 }}>
        <CardContent className="columns-2">
          <Image
            src={src}
            alt={alt}
            width="150"
            height="150"
            layout="fixed"
          />
          <div className="flex flex-col items-center justify-center">
            <Typography>
              <div className="py-6">
                <p className="text-md">{typo1}</p>
              </div>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              className="border-black border-2
                     flex w-32 justify-between items-center px-4 mb-6"
            >
              {countPlus}
            </Typography>
            <Typography className="text-red-500 font-extrabold text-xl">{price}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
