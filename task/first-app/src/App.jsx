import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import CricketScoreBoardComponent from "./CricketScoreBoardComponent";
import Dashboard from "./component/Dashboard";

function App() {
  const [logged, setLogged] = useState(null)
  return (
    <>
      <center>
        <Login checkuser={setLogged} checkValid = {logged}/>

        <Dashboard checkValid = {logged} />
  
      </center>
    </>
  );
}

export default App;
