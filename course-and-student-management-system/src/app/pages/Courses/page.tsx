'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

import CoursesList from '../../components/CoursesList';

import { getCourse } from '../../services/Courses.service';
import { Course } from '../../model/Course.model';
import { UserContext } from '@/app/hooks/UserContex';

const Courses: React.FC = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push('/auth/login');
    }
    getCourse().then((res) => {
      console.log(res.data);
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h2>Cursos</h2>
      <h3 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Cursos disponibles</h3>
      <CoursesList courses={courses} role={user.role!} />
    </div>
  );
};

export default Courses;
