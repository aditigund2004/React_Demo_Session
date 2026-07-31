import React from 'react'
import { useLocation } from 'react-router-dom';

const BankerDashboard = () => {
  const { state } = useLocation();
  const banker = state?.banker;

  return (
    <div>
        <h2>Welcome {banker.name}</h2>

      {banker.role === "manager" && (
        <>
          <button>Manage Customers</button>
          <button>Manage Cashiers</button>
          <button>Add Customer</button>
          <button>Delete Customer</button>
          <button>View Reports</button>
        </>
      )}

      {banker.role === "cashier" && (
        <>
          <button>Deposit Money</button>
          <button>Withdraw Money</button>
          <button>View Customers</button>
        </>
      )}
      
    </div>
  );
};

export default BankerDashboard
