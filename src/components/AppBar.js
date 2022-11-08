import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            sci-music
          </Typography>
          <IconButton size="medium" color="inherit">
            <LoginIcon />
            <Typography>&nbsp;</Typography>

            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "100%",
              }}
            >
              Log In And Register
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
