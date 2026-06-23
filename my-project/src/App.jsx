import './App.css'
import Counter from './Counter'

function App() {

  const name = 'Aditi'

  const age = 22


  const isActive = false

  const clickme = () => {
    console.log("click msg")
  }
  

  return (
    <>
    <center>
      <h1>hello!!!!!! {name}</h1>

      <h1> Welcome to Day 1 of React Js</h1>

      <h3> my age is {age}</h3>

      <h2> sum  = {10 + 20} </h2>

      <h1> 
        {isActive ? "user logged-in" : "User Logged-out"}
      </h1>


      <button onClick={clickme}>Click Me </button>


    </center>
    <Counter/>
      
    </>
  )
}

export default App
