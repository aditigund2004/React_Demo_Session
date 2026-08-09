import React, { useContext } from 'react'
import CreateContextPage from './CreateContextPage'

const Dashboard = () => {

    const {name, theme} = useContext(CreateContextPage);
    // Get data from Context

  return (
    <div style={{
        backgroundColor : theme == 'dark' ? 'black' : 'white',
        color : theme == 'dark' ? 'white' : 'black'
    }

    }>
        <center>
            <h3>Welcomw to Dashboard...{name}</h3>

        </center>
      
    </div>
  )
}

export default Dashboard


// Destructuring means taking values out of an object or array and putting them into variables.