import database from '../../../api/database';
import { User } from '@/app/model/User.model';


export const getUser = async () => {
  return await database.get<User[]>('/users/estudiantes/');
};

export const getUserById = (id: number, user: User[]): User | undefined => {
  return user.find((user) => user.id === id);
};

export const createUser = async (user: User) => {
  return await database.post('/users/estudiantes/', user);
};

export const updateUser = async (id: number, user: User): Promise<void> => {
  return await database.patch('/users/estudiantes/', user);
};

export const deleteUser = async (id: number): Promise<void> => {
  return await database.patch(`/users/estudiantes/${id}`);
};