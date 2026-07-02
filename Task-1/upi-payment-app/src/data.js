let upidata = [
    {
        'id':1,
        'uname': 'ram',
        'tid': 25374737822,
        'paymentdate': '2026-07-01',
        'money': '100',
    },
    {
        'id':2,
        'uname': 'sham',
        'tid': 25374737822,
        'paymentdate': '2026-06-01',
        'money': '1000',
    },
    {
        'id':3,
        'uname': 'radha',
        'tid': 25374737822,
        'paymentdate': '2026-04-01',
        'money': '500',
    }
    
]

export const ShowAPI = ()=>{
    return upidata
}

export const DeleteAPI = (id) => {
    const newl = upidata.filter( (e) => e.id !== id)
    upidata = newl
}


// add data in table
export const addAPI = (upiid)=>{
    upidata = [...upidata, upiid]

}