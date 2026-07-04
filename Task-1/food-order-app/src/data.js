let orders = [
  {
    userId: 101,
    name: "Aarav Sharma",
    address: "12 MG Road, Pune, Maharashtra",
    phone: "9876543210",
    foodType: "Pizza",
    totalQuantity: 2
  },
  {
    userId: 102,
    name: "Priya Patel",
    address: "45 FC Road, Pune, Maharashtra",
    phone: "9876543211",
    foodType: "Burger",
    totalQuantity: 3
  },
  {
    userId: 103,
    name: "Rahul Verma",
    address: "78 Baner Road, Pune, Maharashtra",
    phone: "9876543212",
    foodType: "Biryani",
    totalQuantity: 1
  },
  {
    userId: 104,
    name: "Sneha Iyer",
    address: "22 Kharadi, Pune, Maharashtra",
    phone: "9876543213",
    foodType: "Pasta",
    totalQuantity: 4
  },
  {
    userId: 105,
    name: "Karan Singh",
    address: "91 Hinjawadi Phase 1, Pune, Maharashtra",
    phone: "9876543214",
    foodType: "South Indian",
    totalQuantity: 2
  }
];


export const addDataAPI = ()=>{
    return orders
}


export const DeleteAPI =(userId)=>{
    const newl = orders.filter( (item) => item.userId !== userId)
    orders  = newl

}

export const addAPI =(dt)=>{
    orders = [...orders, dt]
}