'use client';
import { useEffect, useState } from 'react';

<<<<<<< HEAD:course-and-student-management-system/src/app/pages/Courses/page.tsx
import CoursesList from '../../components/CoursesList';

import { getCourses } from '../../api/services/Courses.service';
import { Course } from '../../model/Course.model';
=======
import CoursesList from '../components/CoursesList';

import { getCourses } from '../api/services/courses.service';
import { Course } from '../model/Course.model';
import { database } from '../../../api';

const getCourse = async () => {
  return await database.get<Course[]>('/cursos/');
};
>>>>>>> a04c119022ffc40c18d97629efc36a1c8d13ff1d:course-and-student-management-system/src/app/pages/Courses.tsx

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
<<<<<<< HEAD:course-and-student-management-system/src/app/pages/Courses/page.tsx
      <h2>Cursos</h2>
      <h3 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Cursos disponibles</h3>
=======
      <h2 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">
        Cursos disponibles
      </h2>
>>>>>>> a04c119022ffc40c18d97629efc36a1c8d13ff1d:course-and-student-management-system/src/app/pages/Courses.tsx
      <CoursesList courses={courses} />
    </div>
  );
};

export default Courses;
