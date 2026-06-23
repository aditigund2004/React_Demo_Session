import React, { useState } from "react";

const StudentInfo = () => {
  const [Stud, setStud] = useState({
    roll: "",
    name: "",
    math: "",
    science: "",
    english: "",
    total: "",
  });


  const handleRoll = (e) =>{
    setStud({...Stud, roll : e.target.value})
  }

  const handleName = (e) => {
    setStud({...Stud, name: e.target.value})
  }

  const handleMath = (e) =>{
    setStud({...Stud, math:e.target.value})
  }

  const handleScience = (e) => {
    setStud({...Stud, science:e.target.value})
  }

  const handleEnglish = (e) => {
    setStud({...Stud, english: e.target.value})
  }

    // Store the total in state
  const handletotal =() => {
    const total = Number(Stud.math) + 
                  Number(Stud.mathscience) + 
                  Number(Stud.mathenglish);

    setStud({...Stud, total});
    
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle invoked")
    console.log(Stud)
  }

  return (
    <div>
      <center>
        <h1> Student Information</h1>
        <form onSubmit={handleSubmit}>
            Student Roll : <input type="text" onChange={handleRoll} required></input><br></br><br></br>
            Student Name : <input type="text" onChange={handleName} required></input><br></br><br></br>
            Math : <input type="text" onChange={handleMath} required></input><br></br><br></br>
            Science : <input type="text" onChange={handleScience} required></input><br></br><br></br>
            English : <input type="text" onChange={handleEnglish} required></input><br></br><br></br>

            <button type ="button" onClick={handletotal}>Total :</button><br></br><br></br>

            <button type='submit' >Add Student Information</button>


            <h4>Details</h4>
            <h4> Roll : </h4>{Stud.roll}
            <h4> Name : </h4> {Stud.name}
            <h4>math  : </h4> {Stud.math}
            <h4> science : </h4> {Stud.science}
            <h4> english : </h4> {Stud.english}
            <h4>total : </h4> {Stud.total}
            

        </form>
      </center>
    </div>
  );
};

export default StudentInfo;
