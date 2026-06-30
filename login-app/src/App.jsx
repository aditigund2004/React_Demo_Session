import React, { useState } from 'react'
import Login from './component/Login'
import Dashboard from './component/Dashboard'

const App = () => {

// after login data will pass throgh the app to child
// for that need state variable to catch that incoming data
  const [loggedUser, setLoggedUser] = useState(null)

  return (
    <div>
      <center>

        {/* pass incomig data to user prop  and send to the state to child */}
        <Login check={setLoggedUser} user={loggedUser}/>
        {/* child to parent create function and pass state variable */}
        <Dashboard user={loggedUser}/>
      </center>
      
    </div>
  )
}

export default App
