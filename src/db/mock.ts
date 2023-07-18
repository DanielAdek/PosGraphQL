import { User } from '../types/user.types';

const users: User[] = [
  { id: '1', username: 'John Doe', email: 'john.doe@example.com', createdAt: new Date(), updatedAt: new Date() },
  { id: '2', username: 'Jane Doe', email: 'jane.doe@example.com', createdAt: new Date(), updatedAt: new Date() },
]

export default {
  users
}