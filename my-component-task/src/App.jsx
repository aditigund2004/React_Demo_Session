import "./App.css";
import LikeCounter from "./LikeCounter";

// each component can has state with it

// state has -> state variable and state function
//  const [count -> variable, setcount -> function] = ueState(0);
// initial state of count variable is 0 

function App() {
  return (
    <>
      <center>
        <h1>Hello!!!!!!! Task One</h1>

        <h1>Like Counter</h1>

      </center>
      <LikeCounter/>
      
    </>
  );
}

export default App;
