import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
//import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function ButtonAppBar(props) {
  //const { props } = props;
  // console.log(props.onLoginuser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography>&nbsp;</Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={{ color: "white" }} component="div">
              <b>Home</b>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* {props.onLoginuser && (
              <IconButton size="medium" color="inherit">
                <Typography>&nbsp;</Typography>
                <Link to="/rentCar" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Booking
                  </Typography>
                </Link>
              </IconButton>
            )} */}
            {props.onLoginuser && (
              <IconButton size="medium" color="inherit">
                <AccountBoxIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/UserPage" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    My Account
                  </Typography>
                </Link>
              </IconButton>
            )}
            {props.onLoginuser && (
              <IconButton
                size="medium"
                color="inherit"
                onClick={() => {
                  localStorage.clear();
                  props.setonLoginuser(false);
                  alert("Log Out สำเร็จ");
                }}
              >
                <LogoutIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Log Out
                  </Typography>
                </Link>
              </IconButton>
            )}
            {!props.onLoginuser && (
              <IconButton size="medium" color="inherit">
                <LoginIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Log In And Register
                  </Typography>
                </Link>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

ButtonAppBar.propTypes = {
  onLoginuser: PropTypes.bool,
  setonLoginuser: PropTypes.func,
};

export default ButtonAppBar;
