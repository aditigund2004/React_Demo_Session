import React, { use, useState } from "react";

const FanSpeedControllerComponent = () => {
    // React stores speed in state:
  const [speed, setSpeed] = useState(0);
//   So every time setSpeed() is called → React re-renders the component with new speed.

  const handleclick = () => {
    setSpeed((speed) =>  (speed < 5 ? speed + 1 : speed));
  };

  const handledeclick = () => {
    setSpeed((speed) => (speed > 0 ? speed -1 : speed));

  };

  const resetSpeed = () => {
    setSpeed(0);
  }

  return (
    <div>
      <center>
        <p>Initial speed : {speed}</p>
        <button onClick={handleclick}> Increase Speed</button><br></br><br></br>

        <button onClick={handledeclick}>Decrese Speed</button><br></br><br></br>

        <button onClick={resetSpeed}>reset</button>
      </center>
    </div>
  );
};

export default FanSpeedControllerComponent;
