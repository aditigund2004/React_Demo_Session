import React, { useEffect, useState } from 'react'
import FormDemo from './component/FormDemo'
import Details from './component/Details'

const App = () => {

  const [count, setCount] = useState(0);

  // first -> side-effect function
  // second -> clean-up function 
  // third -> comma seperate dependency list
  
  /* useEffect hook -> react hook by using we can create side effect in functional components.
  
  It lets you do things after the component renders, like:

  fetching data
  updating the DOM
  setting timers
  subscribing to events
  database connectivity
  */



  // variation : 1
  // runs on every render
  // it reder each and every time when ever button clicked or event occure

  // useEffect ( () => {
  //   alert("i will run on each render")
   
  // })


  // variation : 2
  // that runs on only first render or refresh the react app 
  // use array []
  // useEffect ( () => {
  //   alert("i will run only on fist render")

  // }, [])



  // variation : 2
  // 
  useEffect ( () => {
    alert("i will run evry time when count updated")

  }, [count])

  function handleClick() {
    setCount(count+1);


  }



  let [info, setInfo]= useState([]);

  const receiveInfo = (inf) =>{
    setInfo([...info, inf])

  }
  
  return (
    <div>
      <center>

      <h1>Pratice Session</h1>
      <FormDemo sendInfo = {receiveInfo}/>

      <Details collecte={info}/><br></br><br></br>

      <button onClick={handleClick}>Click me</button><br></br><br></br>
      Count is: {count}
      
      </center>
    </div>
  )
}

export default App
