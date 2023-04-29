import { studentsArray1 } from "../../../api/hello/route";
import { User } from '@/app/model/User.model';

export const getUser = (): User[] => {
  return studentsArray1;
};

export const getUserById = (id: number): User | undefined => {
  return studentsArray1.find((user) => user.id === id);
};

export const createUser = (user: User): void => {
  studentsArray1.push(user);
};

export const updateUser = (id: number, updatedCourse: User): void => {
  const index = studentsArray1.findIndex((user) => user.id === id);
  if (index !== -1) {
    studentsArray1[index] = updatedCourse;
  }
};

export const deleteUser = (id: number): void => {
  const index = studentsArray1.findIndex((user) => user.id === id);
  if (index !== -1) {
    studentsArray1.splice(index, 1);
  }
};
