import database from '../../../api/database';
import { Course } from '@/app/model/Course.model';

export const getCourse = async () => {
  return await database.get<Course[]>('/cursos/');
};

export const getCourseById = (id: number, courses: Course[] = []): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const createCourse = async (course: Course) => {
  return await database.post('/curso/', course);
};

export const updateCourse = async (id: number, updatedCourse: Course) => {
  // updatedCourse.categoria = updatedCourse.categoria[0];
  // console.log(updatedCourse.categoria);
  return await database.put(`/curso/${id}`, updatedCourse);
};

export const deleteCourse = async (id: number): Promise<void> => {
  return await database.delete(`/curso/${id}`);
};
