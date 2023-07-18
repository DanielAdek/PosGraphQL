// import { AddUserInput, User } from '../types/user.types';
import mock from '../db/mock';

const resolvers = {
  Query: {
    users: () => mock.users,
  },
  Mutation: {
    // addUser: (_parent, { input }: { input: AddUserInput }): User => {
    //   const id = String(users.length + 1);
    //   const user = { id, ...input };
    //   users.push(user);
    //   return user;
    // },
  },
};

export default resolvers;