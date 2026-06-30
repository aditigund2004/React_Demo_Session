import React, { useState } from 'react'

const CricketScoreBoardComponent = () => {
    const [score, setscore] = useState(0);



  return (
    <div>
        <p>Cricket Score Board </p>

        <p>initial score : {score}</p>

        <button onClick={() => {setscore(score + 1)}}>Add 1 Run</button><br></br><br></br>

        <button onClick={() => {setscore(score + 4)}}>Add 4 Run</button><br></br><br></br>

        <button onClick={() => {setscore(score + 6)}}>Add 6 Run</button><br></br><br></br>

        <button onClick={() => {setscore(score * 0)}}>Reset Score</button>
      
    </div>
  )
}

export default CricketScoreBoardComponent
