let users = [
    {
        'id': 1,
        'name': 'yudhishthira',
        'username': 'yudhishthira',
        'password' : 'Yudhishthira123',
        'role': 'admin'
    },
    {
        'id': 2,
        'name': 'bheem',
        'username': 'bheem',
        'password' : 'Bheem123',
        'role': 'user'
    },
    {
        'id': 3,
        'name': 'arjun',
        'username': 'arjun',
        'password' : 'Arjun123',
        'role': 'user'
    },
    {
        'id': 4,
        'name': 'nakul',
        'username': 'nakul',
        'password' : 'Nakul123',
        'role': 'user'
    },
    {
        'id': 5,
        'name': 'sahadev',
        'username': 'sahadev',
        'password' : 'sahadev123',
        'role': 'user'
    },
]


export const addUser =() =>{
    return users
}

export const addUserToList = (newlist) => {
    users = [...users, newlist]
}