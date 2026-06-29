import React, { useEffect, useState } from 'react'
import ShowAll from './components/ShowAll'
import EmployeeForm from './components/EmployeeForm'

const App = () => {

  let [count, setCount] = useState(0)

  let [change, setChange] = useState(0)

  let [add, setAdd] = useState([])
  let [update, setUpdate] = useState(null)

  const greet =() =>{
    console.log("hello from greet")
  }

  /* 
    useEffect is a React Hook that lets you run code after a component renders.
    Fetch data from an API
    Update the page title
    Set up timers
    Listen for events (scroll, resize, etc.) 
    
    
    featch only certain things in app*/

  useEffect(greet, [change])
  // ueseffect with no dependecy -> whenever function or event called the function will invoke many times or creashes the  app
  // useeffect with empty dependency -> call only once when 

  //1. useEffect with no dependency array : act like a normal called function  .. // not recommended
  //2. useEffect with empty dependency array : only will excute at 1st render of component
  //3. useEffect with valued dependency array : will excute when that provided value is change or updates

  // annonymous function
  // useEffect( () => {
  //   greet();

  // }, [])

  const receiveEmp = () => {
    setAdd(add)
  }

  
  // function 
  const handleAdded =(e)=>{
    // console.log("e", e)
    setAdd(add+e)
    setUpdate(null)
  }

  
  const acceptUpdate =(e)=>{
    // console.log("e", e)
    setUpdate(e)
  }
  return (
    <div>
      <center>
        <h1>Welcome to useEffect Demo App</h1>

        <button onClick={() => setCount(count + 1)}>Increase</button>

        <p>count value : {count}</p>

        <button onClick={() => setChange(change + 1)}>delete</button>
        {/* updateThisEmp = {update} parent to child for that make one state variable then send to child */}
        <EmployeeForm added={handleAdded} updateThisEmp = {update} />

        <ShowAll empAdded= {add} updateEmp={acceptUpdate}/>

      </center>
      
    </div>
  )
}

export default App