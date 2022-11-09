import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage";
import AppBar from "./components/AppBar";
import Booking from "./components/user/Booking";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
