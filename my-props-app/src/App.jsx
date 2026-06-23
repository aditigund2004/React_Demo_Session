import React, { useState } from "react";
import Sum from "./components/Sum";
import Multipy from "./components/Multipy";
import Division from "./components/Division";
import Subtraction from "./components/Subtraction";
import Data from "./components/Data";
import DefaultProp from "./components/DefaultProp";
import AComp from "./components/AComp";
import XComp from "./components/XComp";
import YComp from "./components/YComp";

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)


  let [info, setInfo] = useState("")


  const receiveName = (msg) =>{
      console.log(msg)
    }

  const receive =(datafromY)=>{
    setInfo(datafromY)

  }

  return (
    <div>
      <center>
        <h1>Hello.. Welcome to Props App</h1>
       
            Num1 : <input type = 'text' onChange={(e) => {setNum1(Number(e.target.value))}}/> <br></br><br></br>
            
            Num2 : <input type = 'text' onChange={(e) => {setNum2(Number(e.target.value))}}/> <br></br><br></br>
      
      </center>
      
      <Sum a={num1} b={num2}/>

      <Multipy x = {num1} y = {num2}/>

      <Division q = {num1} r = {num2}/>

      <Subtraction a = {num1} b = {num2}/>

      <Data sendName={receiveName}/>


      <center>

      <DefaultProp name = {"Aditi"}/>

      </center>

      <center>
        <AComp msg = {"Hello"}/>
      </center>

      <center>
        <XComp collection={info}/>

        <YComp data={receive}/>

      </center>
      
    </div>
  );
};

export default App;
