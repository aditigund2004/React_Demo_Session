import React, { useState } from 'react'
import Booking from './components/Booking'
import ShowData from './components/ShowData'

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <center>
        <h1>Ola Booking App</h1>
          <Booking reload={reload} />

      <ShowData refresh={refresh} reload={reload} />
      </center>
      
    </div>
  )
}

export default App
