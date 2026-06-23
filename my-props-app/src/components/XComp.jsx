import React from 'react'


const XComp = ({collection}) => {
  return (
    <div>

        {/*  receive data*/}
        {/* props name ({collectio}) => {} as variabe name from YComp = {collection} */}

        <h3>Msg from YComp = {collection}</h3>
     
      
    </div>
  )
}

export default XComp
