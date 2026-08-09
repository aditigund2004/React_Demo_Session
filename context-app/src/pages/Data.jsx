import React, { useContext } from 'react'
import CreateContextPage from './CreateContextPage'

const Data = () => {
    const {name, theme} = useContext(CreateContextPage);
  return (
    <div style={{
        backgroundColor : theme == 'dark' ? 'black' : 'white',
        color : theme == 'dark' ? 'white' : 'black'
    }

    }>
        <center>
            <h4>data page..</h4>
            <h5>name is: {name}</h5>

        </center>
      
    </div>
  )
}

export default Data
