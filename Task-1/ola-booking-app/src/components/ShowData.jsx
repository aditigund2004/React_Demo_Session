import React, { useEffect, useState } from 'react'
import { deleteAPI, showAllAPI } from '../data';

const ShowData = ({refresh, reload}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(showAllAPI());
  }, [refresh]);

  const handleDelete = (id) => {
    deleteAPI(id);
    reload();
  };

  return (
    <div>
      <table border='2'>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>pickup</th>
            <th>drop</th>
            <th>cabType</th>
            <th>paymentMode</th>
            <th>fare</th>
            <th>date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map ( (item) => (
            <tr key={item.userId || Math.random()}>
              <td>{item.userId}</td>
              <td>{item.name}</td>
              <td>{item.pickup}</td>
              <td>{item.drop}</td>
              <td>{item.cabType}</td>
              <td>{item.paymentMode}</td>
              <td>{item.fare}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => handleDelete(item.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ShowData
