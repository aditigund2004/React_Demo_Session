import React, { useContext } from 'react'
import CreateContextPage from './CreateContextPage'

const Home = () => {

    const {name, theme} = useContext(CreateContextPage);

  return (
    <div style={ {
        backgroundColor : theme == 'dark' ? 'black' : 'white',
        color : theme == 'dark' ? 'white' : 'black'
    }}
    >

        <h4>Home page...</h4>
        <h4>name is .. {name}</h4>
      
    </div>
  )
}

export default Home
