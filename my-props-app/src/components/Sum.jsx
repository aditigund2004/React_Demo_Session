import React from 'react'

const Sum = ({a , b}) => {

  // a = 30; // wrong way

  // props.a = 30 // props cannot modify in the child component
  return (
    <div>
        <center>
            <h2>
                Sum = {a + b}
            </h2>
        </center>
      
    </div>
  )
}

export default Sum
