import React, { useState } from "react";

/* 

Hook -> used to different functionality
to use build in feature we have to use hooks

useState -> useState is a built-in React Hook that lets you add and manage state variables in functional components.
 It preserves data across renders and triggers a UI update (re-render) whenever the data changes.

*/
const Counter = () => {
  const [scount, setScount] = useState(0); // hook

  let count = 0;

  const handleIncrement = () => {
    count++;
    console.log("Nomael Count :", count);

    setScount(scount + 1);
    console.log("Dynamic count : ", scount);
  };

  const handleDecrement = () => {
    count--;
    console.log("Normal count : ", count);

    setScount(scount - 1);
    console.log("Dynamic Count : ", scount);
  };

  return (
    <>
      <center>
        <h1> Counter Page</h1>

        <h2>
          Normal Count = {count} {" | "} State Count = {scount}
        </h2>

        {/* <button onClick={() => handleIncrement}>Increment</button> */}

        <button
          onClick={() => {
            setScount(scount + 1);
          }}
        >
          Increment
        </button>
        <br></br>
        <br></br>

        {/* <button onClick={handleDecrement}>Decrement</button> */}
        <button
          onClick={() => {
            setScount(scount - 1);
          }}
        >
          DecIncrement
        </button>
        <br></br>
        <br></br>

        <button
          onClick={() => {
            setScount(scount * 0);
          }}
        >
          Reset{" "}
        </button>
      </center>
    </>
  );
};

export default Counter;

// rafc
