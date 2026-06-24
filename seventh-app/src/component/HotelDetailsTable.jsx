import React from 'react'

const HotelDetailsTable = ({collectInfo, deletedId}) => {

  return (
    <div>
        <table border = '2' cellPadding='4'>
            <thead>
                <tr>
                    <th>Booking Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>mobile No.</th>
                    <th>No of Adults</th>
                    <th>No of Infants</th>
                    <th>total Person</th>
                    <th>Room🫣</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    collectInfo?.map((d) => (
                        <tr key={d.bookingid}>
                            <td>{d.bookingid}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.mob}</td>
                            <td>{d.noadult}</td>
                            <td>{d.noinfants}</td>
                            <td>{d.totalp}</td>
                            <td>{d.room}</td>
                            <td>{d.desc}</td>
                            <td>
                                {/* <button type='submit' onClick={() => HandleDelet(d.bookingid)}>Delete</button> */}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default HotelDetailsTable

