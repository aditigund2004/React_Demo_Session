import React, { useState } from "react";

// hooks means utility that are provided by react out of the box and you just have to use these features

const LikeCounter = () => {
  const [scount, setscount] = useState(0);

  return (
    <div>
      <center>
        <p>Hello.. From Like Counter component ❤️</p>

        <p>current like : {scount}👍</p>

        <button
          onClick={() => {
            console.log("like clicked");
            setscount(scount + 1);
          }}
        >
          Like
        </button>
        <br></br>
        <br></br>

        <button
          onClick={() => {
            console.log("Dislike clicked");
            setscount(scount - 1);
          }}
        >
          Dislike
        </button>

        <br></br>
        <br></br>

        <button onClick={() => { setscount(0)}}> Reset all likes</button>
      </center>
    </div>
  );
};

export default LikeCounter;
