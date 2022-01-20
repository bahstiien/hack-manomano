import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardCreateProjet({content,onClick,image,alt,sx}) {
  return (
    <Card className="text-center rounded-xl flex items-center justify-center shadow-2xl" onClick={onClick} sx={sx}>
      <CardActionArea>
      <CardMedia component="img" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {content} 
          </Typography>
 
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
