// simple array acting as a fake database.
let employees =[
    {
    id: 101,
    name: "Rohit Sharma",
    salary: 50000,
  },
  {
    id: 102,
    name: "Priya Patil",
    salary: 45000,
  },
  {
    id: 103,
    name: "Amit Kumar",
    salary: 60000,
  },
  {
    id: 104,
    name: "Sneha Joshi",
    salary: 55000,
  },
  {
    id: 105,
    name: "Rahul Verma",
    salary: 48000,
  },

];

// API

// This function (ShowAllEmployees) simply returns the current employee list.
export const ShowAllEmployees = () => {
    return employees
};


// export → Makes the function available to other files/modules.
export const deletebyId = (id) =>{
  // Creates a new array excluding employee 102.
  const uplist = employees.filter((item) => item.id!==id)
  employees = uplist;
  // Updates the global array.
}


export const addEmployee = (emp) => {

  employees =[...employees, emp]
  console.log(employees)

}

export const updateEmployee = (emp) =>{
  // map is used to get all employee
  // ckeck all id are match the incoming id on that emp return emp new updated 
   employees = employees.map((item) => {
    if(item.id === emp.id){
      return emp;
    }
    // if id does not match then return as it is to the table
    return item;

  })
}