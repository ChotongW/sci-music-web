import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "@mui/material/Container";
import { ConstructionOutlined } from "@mui/icons-material";

const MainLayoutUser = () => {
  const [onLoginuser, setonLoginuser] = useState(
    !!localStorage.getItem("user")
  );
  //console.log(onLoginuser);
  return (
    <div>
      <AppBar onLoginuser={onLoginuser} setonLoginuser={setonLoginuser} />
      <Container fixed>
        <Outlet context={[onLoginuser, setonLoginuser]} />
      </Container>
    </div>
  );
};

export default MainLayoutUser;
