import React from "react";
import LoginPage from "./LoginPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <center>
        <h2>Welcome to Login page....</h2>
        <Navbar />
          <Routes>
            <Route path="login" element={<LoginPage />}></Route>

            
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Routes>

      </center>
    </div>
  );
};

export default App;
