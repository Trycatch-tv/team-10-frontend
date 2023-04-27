'use client';
import { useEffect, useState } from 'react';

import CoursesList from '../components/CoursesList';

import { getCourses } from '../api/services/courses.service';
import { Course } from '../model/Course.model';
import { database } from '../../../api';

const getCourse = async () => {
  return await database.get<Course[]>('/cursos/');
};

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    getCourse().then((res) => {
      console.log(res.data);
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">
        Cursos disponibles
      </h2>
      <CoursesList courses={courses} />
    </div>
  );
};

export default Courses;
