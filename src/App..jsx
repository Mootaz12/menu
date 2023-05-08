import { Box, Typography, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import menu from "./data";
import CardFood from "./CardFood";

export default function App() {
  const [food, setFood] = useState([]);
  const getFood = (category) => {
    let newFood = [];
    if (category === "all") {
      newFood = menu;
    } else {
      newFood = menu.filter((menuItem) => menuItem.category === category);
    }
    setFood(newFood);
  };

  useEffect(() => {
    getFood("all");
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      gap={10}
    >
      <Typography variant="h2" marginX="auto">
        Our Menu
      </Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={() => getFood("all")}>
          All
        </Button>
        <Button variant="contained" onClick={() => getFood("breakfast")}>
          Breakfast
        </Button>
        <Button variant="contained" onClick={() => getFood("lunch")}>
          Lunch
        </Button>
        <Button variant="contained" onClick={() => getFood("shakes")}>
          Shakes
        </Button>
      </Box>
      <Grid container spacing={5} justifyContent="center">
        {food.map((foodItem) => (
          <Grid item key={foodItem.id} xs={12} sm={6} md={4} lg={3}>
            <CardFood foodItem={foodItem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
