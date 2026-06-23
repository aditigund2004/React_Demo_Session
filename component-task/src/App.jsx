import { useState } from "react";
import SocialMediaPost from "./SocialMediaPost";
import EmployeeForm from "./EmployeeForm";

function App() {
  const [name, setName] = useState("");

  const handleName = (e) => {
    // console.log("e = ", e) //e =  SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
    // console.log("e = ", e.target) // return input tag e<input type ="text" name = "username">
    console.log("e= ", e.target.value);
    setName(e.target.value);
  };

  return (
    <>
      <center>
        Enter Your Name
        <input type="text" name="username" onChange={handleName} />
        <h1>Hello...</h1>
        {name}
        <h1>Social Media Post</h1>
      </center>
      <SocialMediaPost />
      <EmployeeForm />
    </>
  );
}

export default App;
