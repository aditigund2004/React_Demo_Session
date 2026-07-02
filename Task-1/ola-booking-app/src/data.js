let book = [
  {
    userId: 1,
    name: "Rahul Sharma",
    pickup: "Shivajinagar",
    drop: "Hinjewadi",
    cabType: "Mini",
    paymentMode: "UPI",
    fare: 320,
    date: "2026-07-01"
  },
  {
    id: 2,
    name: "Priya Patil",
    pickup: "Kothrud",
    drop: "Pune Station",
    cabType: "Prime Sedan",
    paymentMode: "Cash",
    fare: 280,
    date: "2026-07-02"
  }
];

export const showAllAPI = () => {
    return book;
};

export const addAPI = (obj) => {
    book.push(obj);
};

export const deleteAPI = (id) => {
    book = book.filter(item => item.userId !== id);
};