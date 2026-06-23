import React, { useState } from "react"

const EnquiryForm = ({sendData}) => {
  // props -> sendData

    const[data, setData] = useState({id: '', sname: "", qual: "", col: "", email: "", mob : "", add: ""})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        sendData(data)
        setData({id: '', sname: "", qual: "", col: "", email: "", mob : "", add: ""})
    }

    const handleChange = (e) => {

        let {name , value}= e.target

        setData({...data, [name] : value})
    }

  return (
    <div>
        <center>
        <form onSubmit={handleSubmit}>
            Id <input type="text"  name="id" value={data.id} onChange={handleChange} required/><br></br><br></br>
            Name <input type="text"  name="sname" value={data.sname} onChange={handleChange} required/><br></br><br></br>
            Qualification : <input type = "text" name = "qual" value = {data.qual} onChange={handleChange} required/> <br></br><br></br>
            College : <input type = "text" name = "col" value = {data.col} onChange={handleChange} required/> <br></br><br></br>
            Email : <input type = "text" name = "email" value = {data.email} onChange={handleChange} required/> <br></br><br></br>
            Mobile No. : <input type = "text" name = "mob" value = {data.mob} onChange={handleChange} required/> <br></br><br></br>
            Address : <input type = "text" name = "add" value = {data.add} onChange={handleChange} required/> <br></br><br></br>
            <button type="submit"> Submit Data</button>
            <br></br><br></br>

        </form>
      </center>
    </div>
  )
}

export default EnquiryForm
