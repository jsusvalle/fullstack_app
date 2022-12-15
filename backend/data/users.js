import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'example user',
        address: 'Cll 125 #54-10',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'John Doe',
        address: 'Cll 125 #54-10',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        address: 'Cll 125 #54-10',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;