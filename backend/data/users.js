import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Nelson',
    email: 'nfleig@hotmail.com',
    password: bcrypt.hashSync('nelson', 10),
  },
  {
    name: 'Martin',
    email: 'mfleig@hotmail.com',
    password: bcrypt.hashSync('martin', 10),
  },
];

export default users;
