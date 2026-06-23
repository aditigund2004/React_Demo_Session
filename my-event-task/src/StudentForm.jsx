import React, { useState } from "react";

const StudentForm = () => {
  const [std, setStd] = useState({
    stdroll: "",
    stdname: "",
    math: "",
    sci: "",
    eng: "",
    total: "",
  });

  const [allstd, setAllstd] = useState([]);

  const handleSubmit = (e) => {
    // e.preventDefault -> prevents from reloading the page
    e.preventDefault();
    console.log(std);
    // make objects empty not input tag after entering the value once the make it empty
    // Clear form after submit
    setStd({ stdroll: "", stdname: "", math: "", sci: "", eng: "", total: "" });
    // after adding data successfully then clear the filed
    // setStd({stdroll: '0', stdname : '', stdmarks: ''})
    // after submitting the form it will show 0 on the roll input filed

    // at refreshing it will show initial value

    const tt = Number(std.math) + Number(std.sci) + Number(std.eng);

    setStd(tt);

    setAllstd([...allstd, { ...std, total: tt }]);
  };

  const handleChanage = (e) => {
    // when user click on the input tag to enter data then call the the handleChanage and return name and value
    // Get name and value from the event
    // attribute of react name and value -- name = 'stdroll' value ={std.stdroll} from input html tag
    const { name, value } = e.target;
    setStd({ ...std, [name]: value });

    // setStd({...std, [e.target.name]: e.target.value})
  };

  const handleReset = () => {
    setStd({ stdroll: "", stdname: "", math: "", sci: "", eng: "", total: "" });
    // setStd(null);
  };

  return (
    <div>
      <center>
        <h2>Student From</h2>
        <form onSubmit={handleSubmit}>
          Enter Roll :
          <input
            type="text"
            name="stdroll"
            value={std.stdroll}
            onChange={handleChanage}
            required
          ></input>
          <br></br>
          <br></br>
          Enter Name :
          <input
            type="text"
            name="stdname"
            value={std.stdname}
            onChange={handleChanage}
            required
          ></input>{" "}
          <br></br>
          <br></br>
          Math :
          <input
            type="text"
            name="math"
            value={std.math}
            onChange={handleChanage}
            required
          ></input>{" "}
          <br></br>
          <br></br>
          Science :
          <input
            type="text"
            name="sci"
            value={std.sci}
            onChange={handleChanage}
            required
          ></input>{" "}
          <br></br>
          <br></br>
          English :
          <input
            type="text"
            name="eng"
            value={std.eng}
            onChange={handleChanage}
            required
          ></input>
          <br></br>
          <br></br>
          {/* value => use when we want to clear input filed at the web page after clicking the submit button then use value  */}
          <button type="submit">Add Student Details</button>{" "}
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        <br></br>

        <div>
          <h2>All Student Details</h2>
          <table border="2">
            {/* group header content */}
            <thead>
              <tr>
                {/* th -> table header */}
                <th>Roll No </th>
                <th>Name </th>
                <th>Math </th>
                <th>Science </th>
                <th>English</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* group main data body */}
              {allstd.map((s) => (
                <tr key={s.stdroll}>
                  {/* standard data cell */}
                  <td>{s.stdroll}</td>
                  <td>{s.stdname}</td>
                  <td>{s.math}</td>
                  <td>{s.sci}</td>
                  <td>{s.eng}</td>
                  <td>{s.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default StudentForm;
