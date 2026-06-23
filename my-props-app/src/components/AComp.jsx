import React from 'react'
import BComp from './BComp'

const AComp = ({msg}) => {
  // props msg 

  return (
    <div>
        {/* from a parent  or nested props */}

        {/* call BComp component */}
        <BComp msgg = {msg}/>
      
    </div>
  )
}

export default AComp
