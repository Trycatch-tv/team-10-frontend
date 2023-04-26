import courses from '../hello/route';
import { Course } from '@/app/model/Course.model';

export const getCourses = (): Course[] => {
  return courses;
};

export const getCourseById = (id: number): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const createCourse = (course: Course): void => {
  courses.push(course);
};

export const updateCourse = (id: number, updatedCourse: Course): void => {
  const index = courses.findIndex((course) => course.id === id);
  if (index !== -1) {
    courses[index] = updatedCourse;
  }
};

export const deleteCourse = (id: number): void => {
  const index = courses.findIndex((course) => course.id === id);
  if (index !== -1) {
    courses.splice(index, 1);
  }
};
