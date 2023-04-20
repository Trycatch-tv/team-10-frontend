import { studentsArray1 } from '../hello/route';
import { Students } from '@/app/model/Students.model';

export const getStudents = (): Students[] => {
  return studentsArray1;
};

export const getStudentsById = (id: string): Students | undefined => {
  return studentsArray1.find((student) => student.cedula === id);
};

export const createStudents = (course: Students): void => {
  studentsArray1.push(course);
};

export const updateStudents = (id: string, updatedCourse: Students): void => {
  const index = studentsArray1.findIndex((student) => student.cedula === id);
  if (index !== -1) {
    studentsArray1[index] = updatedCourse;
  }
};

export const deleteStudents = (id: string): void => {
  const index = studentsArray1.findIndex((student) => student.cedula === id);
  if (index !== -1) {
    studentsArray1.splice(index, 1);
  }
};
