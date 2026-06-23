import React from 'react'

const Division = ({q, r}) => {
  const result = r ? q / r : "Cannot divide input";
  return (
    <div>
        <center>
            <h2>
                Division = {q / r}
            </h2>
        </center>
      
    </div>
  )
}

export default Division
