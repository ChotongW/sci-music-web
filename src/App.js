import "./App.css";
import React from "react";
import MainLayoutUser from "./components/MainLayout-user";
import Homepage from "./components/Homepage";
import AppBar from "./components/AppBar";
import Booking from "./components/user/Booking";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Dashboard from "./components/user/Dashboard";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayoutUser />}>
          <Route path="" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
