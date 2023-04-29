'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

import CoursesList from '../../components/CoursesList';

import { getCourse } from '../../services/Courses.service';
import { UserContext } from '@/app/hooks/UserContex';
import { MyContext } from '@/app/hooks/UseReducer';

const Courses: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MyContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push('/auth/login');
    }
    getCourse().then((res) => {
      dispatch({
        type: 'SABE_COURSES',
        payload: res.data,
      });
    });
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h2>Cursos</h2>
      <h3 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Cursos disponibles</h3>
      <CoursesList courses={state.courses} role={user.role!} />
    </div>
  );
};

export default Courses;
