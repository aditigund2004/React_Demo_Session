import React, { useState } from 'react'

const HotelForm = ({info}) => {
    // props info
    const [data, setData] = useState({bookingid: '', name: '', email : '', mob: '', noadult: '', noinfants: '', totalp: '', room: '', desc:''})

    const handleForm =(e) => {
        e.preventDefault()
        console.log(data)
        // clear from
        setData({bookingid: '', name: '', email : '', mob: '', noadult: '', noinfants: '', totalp: '', room: '', desc:''})

        info(data) // Send data to App
        
        // total of adults and infants
        const total = Number(data.noadult) + Number(data.noinfants)

        const totalperson = {...data, totalp: total}
        // pass to props
        info(totalperson)

        // create varible assign state data to that variable
       

    }

    const handleInput = (e) => {
        const {name, value} = e.target
        setData({...data, [name] : value})
    }

  return (
    <div>
        <center>
            <form onSubmit={handleForm}>

                <h1>Hotel Room Booking App</h1>

                Booking Id: <input type='text' name ='bookingid' value={data.bookingid} onChange={handleInput} required/><br></br><br></br>
                Name: <input type='text' name ='name' value={data.name} onChange={handleInput} required/><br></br><br></br>
                Email: <input type='text' name ='email' value={data.email} onChange={handleInput} required/><br></br><br></br>
                Mobile No.: <input type='text' name ='mob' value={data.mob} onChange={handleInput} required/><br></br><br></br>
                No. of Adults: <input type='text' name ='noadult' value={data.noadult} onChange={handleInput} required/><br></br><br></br>
                No. of Infants: <input type='text' name ='noinfants' value={data.noinfants} onChange={handleInput} required/><br></br><br></br>
                Room: <input type='text' name ='room' value={data.room} onChange={handleInput} required/><br></br><br></br>
                Description: <input type='text' name ='desc' value={data.desc} onChange={handleInput} required/><br></br><br></br>

                <button type='submit'>Add Details</button><br></br><br></br>


            </form>
        </center>
      
    </div>
  )
}

export default HotelForm
