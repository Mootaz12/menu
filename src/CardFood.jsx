/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { useEffect, useState } from "react";
export default function CardFood({ foodItem }) {
  const { id, title, desc, price } = foodItem;
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      const { default: image } = await import(
        /* @vite-ignore */ `./assets/images/item-${id}.jpeg`
      );
      setImageSrc(image);
    };
    importImage();
  }, [foodItem]);

  return (
    <Card>
      <CardMedia component="img" alt={title} src={imageSrc} height={200} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">{title}</Typography>
          <Chip color="info" label={price} />
        </Box>
        <Typography mt={2} variant="body2">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
