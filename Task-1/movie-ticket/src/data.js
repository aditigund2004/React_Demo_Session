let bookings = [
  {
    userId: 1,
    movie: "Sholay",
    theater: "DVP",
    screen: "Full Screen",
    seat: 4,
    show: 1,
    ticketNo: 5,
    booking: 5,
    payment: "Online"
  },
  {
    userId: 2,
    movie: "KGF",
    theater: "PVR",
    screen: "Screen 2",
    seat: 12,
    show: 2,
    ticketNo: 6,
    booking: 6,
    payment: "Cash"
  },
  {
    userId: 3,
    movie: "Pushpa",
    theater: "INOX",
    screen: "Screen 1",
    seat: 8,
    show: 3,
    ticketNo: 7,
    booking: 7,
    payment: "UPI"
  },
  {
    userId: 4,
    movie: "Jawan",
    theater: "Cinepolis",
    screen: "Screen 3",
    seat: 15,
    show: 4,
    ticketNo: 8,
    booking: 8,
    payment: "Credit Card"
  },
  {
    userId: 5,
    movie: "RRR",
    theater: "Miraj",
    screen: "Screen 4",
    seat: 20,
    show: 5,
    ticketNo: 9,
    booking: 9,
    payment: "Online"
  }
];

export const addAPI =() =>{
  return bookings

}


export const deleteAPI = (userId)=>{
  const nlist = bookings.filter( (item) => item.userId !==userId)
  bookings = nlist
}


export const addDataAPI =(dt) =>{
  bookings = [...bookings, dt]
}