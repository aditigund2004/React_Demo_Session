import axios from "axios";

export const showAllEmployee = () => axios.get(`http://127.0.0.1:8000/api/employees/`)

export const deleteEmployee = (id) => axios.delete(`http://127.0.0.1:8000/api/employees/${id}/`)

export const addEmployee = (emp) => axios.post(`http://127.0.0.1:8000/api/employees/`, emp)

export const updateEmployee = (id, emp) => axios.put(`http://127.0.0.1:8000/api/employees/${id}/`, emp)