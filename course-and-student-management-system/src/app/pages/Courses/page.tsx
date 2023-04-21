'use client';
import { useEffect, useState } from 'react';

import CoursesList from '../../components/CoursesList';

import { getCourses } from '../../api/services/courses.service';
import { Course } from '../../model/Course.model';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const coursesData = getCourses();
    setCourses(coursesData);
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h2>Cursos</h2>
      <h3 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Cursos disponibles</h3>
      <CoursesList courses={courses} />
    </div>
  );
};

export default Courses;
