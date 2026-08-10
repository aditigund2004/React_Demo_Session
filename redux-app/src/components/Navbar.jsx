import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <center>
        i am navbar and counter is {count}
        <br /> <br />
      </center>
    </div>
  )
}

export default Navbar





