import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Booking from "./BookingCard";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Kanit"].join(","),
//   },
// });

const BookingCard = [
  {
    title: "จองห้องซ้อม",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "../img/music_room.jpg",
    imageLabel: "music room",
  },
  {
    title: "ยืมเครื่องดนตรี",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "../img/music_room.jpg",
    imageLabel: "instrument",
  },
];

function Homepage() {
  const design = { color: "blue", textAlign: "center" };
  return (
    <>
      <h1 style={design}>Welcome to Web Sci Music Homepage</h1>
      <Grid container spacing={4} justifyContent="center">
        {BookingCard.map((card) => (
          <Booking key={card.title} card={card} />
        ))}
      </Grid>
    </>
  );
}

export default Homepage;
