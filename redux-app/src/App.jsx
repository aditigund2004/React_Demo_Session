import React from 'react'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch  = useDispatch()
  return (

    <div>

      <center>
        <Navbar/>

      <button onClick={()=> dispatch(decrement())}> - </button> <br />
      
      current value : {count} <br />

      <button onClick={() => dispatch(increment())}> + </button>
      </center>
    </div>
  )
}

export default App

// Redux is a library for managing shared/global state in a JavaScript/React application.

// useSelector -> Used to read Redux state:

// useDispatch -> Used to change Redux state: