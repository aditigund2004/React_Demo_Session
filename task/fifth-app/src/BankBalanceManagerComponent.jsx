import React, { useState } from 'react'

const BankBalanceManagerComponent = () => {
    const [bankbala, setBankbala] = useState(1000)

    const deposit = () => {
        setBankbala((bankbala) => bankbala + 500);
    };

    const withdraw = () => {
        setBankbala((bankbala) => (bankbala >= 500 ? bankbala - 500 : bankbala));
    };
    

  return (
    <div>
        <center>
            <p>Initial Balance : {bankbala}</p>

            <button onClick={deposit}>Deposite Add Rs 500</button><br></br><br></br>

            <button onClick={withdraw}>Withdrow Rs 500</button><br></br><br></br>

            <button onClick={() => (setBankbala(1000))}>restores Rs 1000</button><br></br><br></br>

        </center>
      
    </div>
  )
}

export default BankBalanceManagerComponent
