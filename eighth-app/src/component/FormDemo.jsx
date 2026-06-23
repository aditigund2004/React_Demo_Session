import React, { useState } from "react";

const FormDemo = ({sendInfo}) => {
    
    const [data, setData] = useState({id: '', name: '', address: '', age: ''});
   
    const handleform = (e) => {
    e.preventDefault()
    console.log(data)
    // sendInfo props name -> app.jsx 
    sendInfo(data)
    setData({id: '', name: '', address: '', age: ''})


  };

  const handleInput = (e) => {

    const {name, value} = e.target

    setData({...data, [name]: value })

  }
  return (
    <div>
      <center>
        <h1>Student Form</h1>
        <form onSubmit={handleform}>
          Id: <input type="text" name = 'id' value = {data.id} onChange={handleInput} required /><br></br><br></br>
          name: <input type="text" name = 'name' value = {data.name} onChange={handleInput} required /><br></br><br></br>
          address: <input type="text" name = 'address' value = {data.address} onChange={handleInput} required /><br></br><br></br>
          age: <input type="text" name = 'age' value = {data.age} onChange={handleInput} required /><br></br><br></br>

          <button type="submit">Add data</button>
        </form>
      </center>
    </div>
  );
};

export default FormDemo;
