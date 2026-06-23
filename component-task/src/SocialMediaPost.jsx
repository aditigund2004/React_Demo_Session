import React, { useState } from 'react'

const SocialMediaPost = () => {
    const [like, setLike] = useState(0)
    const [laugh, setLaugh] = useState(0)
    const [wow, setWow] = useState(0)

    const handleReset = () => {
        setLike(0)
        setLaugh(0)
        setWow(0)
    }


  return (
    <div>
        <center>
            
            <p> Events : onClick - Runs when a user clicks an element (button, link, etc.). 
            <br></br> onChange - Runs when the value of an input, select box, or textarea changes.,
            <br></br>onSubmit - Runs when a form is submitted.</p>

            <h1>Challenge</h1>

            <button type='button' onClick={() => {setLike(like + 1)}}> ❤️</button> = {like} <br></br><br></br>
            <button type='button' onClick={() => {setLaugh(laugh + 1)}}> 😂</button> = {laugh} <br></br><br></br>
            <button type='button' onClick={() => {setWow(wow + 1)}}> 😮</button> = {wow} <br></br><br></br>
            <button type='button' onClick={handleReset}> Reset All</button> <br></br><br></br>
        </center>
      
    </div>
  )
}

export default SocialMediaPost
