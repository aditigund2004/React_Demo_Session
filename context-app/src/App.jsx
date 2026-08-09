import React, { useState } from 'react'
import Dashboard from './pages/Dashboard';
import CreateContextPage from './pages/CreateContextPage';
import Data from './pages/Data';
import Home from './pages/Home';

const App = () => {

  const [name, setName] = useState('');
  const [theme, setTheme]  = useState('light');

  const handleName = ()=>{
    setName('ram') 
  }

  const handleTheme = ()=>{

    if(theme == 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <div>
      <center>

        <button onClick={handleName}>send data..</button>{" | "}

        <button onClick={handleTheme}>change theme</button>

        <CreateContextPage.Provider value={{name, theme}}>

          <Dashboard/>
          <Data/>
          <Home/>

        </CreateContextPage.Provider>


      </center>
      
    </div>
  )
}

export default App
                  