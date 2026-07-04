import axios from "axios";

// let RUL = 'http://localhost:3000/employees'
// `${URL}/employees`

export const fetchAllEmployee = () => axios.get('http://localhost:3000/employees')

export const addAllEmployee = (emp)=> axios.post('http://localhost:3000/employees', emp)

export const deleteAllEmployee = (id) => axios.delete('http://localhost:3000/employees/' + id)

export const updateAllEmployee = (id, emp) => axios.put(`http://localhost:3000/employees/${id}`, emp)

