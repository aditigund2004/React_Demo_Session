import React, { useEffect, useState } from 'react'
import { api } from '../service'

const ShowData = () => {
    const [alluser, setAllUser] = useState( [])

    // if(!receiveTo) return null;
//     useEffect(() => {
//     api.get("/users").then((res) => setAllUser(res.data));
//   }, []);

 useEffect(() => {
    api.get("/users").then((res) => {
      setAllUser(res.data);
    });
  }, []);


    // const loadAllUser = ()=>{
    //     api.get('/users')
    //     .then( (res)=>{
    //         console.log(res.data)
    //         setAllUser(res.data)
    //     })
    //     .catch( (err) =>{
    //         console.log(err)
    //     })
    // }

    // useEffect( () =>{
    //     loadAllUser();
    // } , [receiveTo])
  return (
    <div>
        <center>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    alluser.map( (receiveTo) => ( 
                            <tr key={receiveTo.id}>
                                <td>{receiveTo.name}</td>
                                <td>{receiveTo.role}</td>
                                <td>{receiveTo.email}</td>
                            </tr>
                            ))
                   }
                    
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default ShowData