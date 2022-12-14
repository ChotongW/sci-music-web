import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit"].join(","),
  },
});

function BookingCard(props) {
  const callBooking = (event) => {
    let path = `/booking`;
    navigate(path);
  };

  const goLogin = (event) => {
    let path = `/login`;
    navigate(path);
  };

  const [onLoginuser, setonLoginuser] = useOutletContext();

  // useEffect(() => {
  //   if (!onLoginuser) {
  //     navigate("/Login");
  //   }
  // }, [onLoginuser]);

  let navigate = useNavigate();
  const { card } = props;
  //console.log(card);
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            style={{ height: 140 }}
            image={card.image}
            alt={card.imageLabel}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
            <CardActions>
              {!onLoginuser && (
                <Button variant="contained" size="large" onClick={goLogin}>
                  กรุณา Login ก่อนจอง
                </Button>
              )}
              {onLoginuser && (
                <Button variant="contained" size="large" onClick={callBooking}>
                  จอง
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}

BookingCard.propTypes = {
  card: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingCard;
