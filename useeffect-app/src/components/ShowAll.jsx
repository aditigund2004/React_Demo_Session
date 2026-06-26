import React, { useEffect, useState } from "react";
import { deletebyId, ShowAllEmployees } from "../services";

const ShowAll = ({empAdded, updateEmp}) => {

  const [allemploye, setAllemploye] = useState([])
  // State used to store employees displayed in the UI.

  const [refresh, setRefresh] = useState(0)
  // This state is used only to trigger useEffect.


  // Every time the component renders, "Component rendered" is logged.

  // featch  object data from the service file > function ShowAllEmployees 
  //  and set in the state variable
  function loadEmployees (){
  /* 
  these function

  Calls service function
  Gets employee list
  Stores it in React state */
    setAllemploye(ShowAllEmployees())
    // console.log('LoadEmployee function called', ShowAllEmployees())
  }

  // loadEmployees()
  // manually calling will cresh the application

  //   useEffect used to feach all employee
  useEffect(loadEmployees, [refresh, empAdded])
  // Run loadEmployees() whenever refresh changes

  // when the delete button is click agoian the all remain employee shloud load

//   useEffect(() => {
//   loadEmployees();
// }, [refresh]);
    

  const handleDelete = (id) =>{
    // Delete from service data
    deletebyId(id)
    // setRefresh(refresh + 1) Changes:0 → 1
    setRefresh(refresh + 1)
//     console.log("deleted employees :", id ,ShowAllEmployees())
  }


  const handleUpdate = (emp)=>{
      // first we have to send data to hte form by using props
      // sender updateEmp prop
      updateEmp(emp)

  }

  return (
    <div>
      <table border="2" cellPadding="4">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {/* Rendering Employees -> Loop through every employee. */}
          {allemploye?.map((eq) => (
            <tr key={eq.id}>
              <th>{eq.id}</th>
              <th>{eq.name}</th>
              <th>{eq.salary}</th>
              <th>
                <button onClick={() => handleDelete(eq.id)}>Delete</button>
              </th>
              <th>
                <button onClick={() => handleUpdate(eq)}>Update</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAll;



/* 
Render
 ↓
loadEmployees()
 ↓
setState()
 ↓
Render again
 ↓
loadEmployees()
 ↓
setState()
 ↓
Render again


Infinite loop → application crashes.

That's why state updates should usually be inside useEffect.
*/


/* 
Initial Load
Component Mounts
      ↓
useEffect runs
      ↓
loadEmployees()
      ↓
ShowAllEmployees()
      ↓
setAllemploye(...)
      ↓
Table displays all employees
*/




/* 
Delete Employee
Delete button clicked
      ↓
handleDelete(101)
      ↓
deletebyId(101)
      ↓
employees array updated
      ↓
setRefresh(1)
      ↓
refresh changed
      ↓
useEffect runs again
      ↓
loadEmployees()
      ↓
setAllemploye(updated employees)
      ↓
UI updates
*/