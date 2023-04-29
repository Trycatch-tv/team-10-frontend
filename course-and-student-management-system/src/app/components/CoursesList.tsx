'use client';

import { useState, useEffect, useContext } from 'react';
import CourseOptions from './CourseOptions';

import { Course } from '../model/Course.model';
import CourseModalEdit from './CourseModalEdit';
import { MyContext } from '../hooks/UseReducer';

type Props = {
  courses: Course[];
  role: string;
};

const CoursesList: React.FC<Props> = ({ role }) => {
  const { state, dispatch } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModalEditView, setOpenModalEditView] = useState(false);

  const handleChangeModalEditView = () => {
    setOpenModalEditView(!openModalEditView);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('searchTerm', searchTerm);
    }
  }, [state.courses]);

  const filteredCourses = state.courses.filter((course) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    // const filteredStudents = course?.number_of_students.filter(
    //   (student) =>
    //     student?.name.toLowerCase().includes(lowerSearchTerm) ||
    //     student?.cedula.toLowerCase().includes(lowerSearchTerm) ||
    //     student?.email.toLowerCase().includes(lowerSearchTerm) ||
    //     student?.phone.toLowerCase().includes(lowerSearchTerm)
    // );
    return (
      course.nombre.toLowerCase().includes(lowerSearchTerm) ||
      course.descripcion.toLowerCase().includes(lowerSearchTerm) ||
      course.fechaInicio.toLowerCase().includes(lowerSearchTerm) ||
      course.fechaFinalizacion.toLowerCase().includes(lowerSearchTerm) ||
      course.profesor!.toLowerCase().includes(lowerSearchTerm)
      // ||filteredStudents.length > 0
    );
  });

  return (
    <div>
      <div className="container flex items-center p-5">
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="flex items-center justify-center sm:justify-start mr-4 p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 m-2 ml-14"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {role === 'admin' ? (
            <button
              onClick={handleChangeModalEditView}
              className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Crear nuevo
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <CourseModalEdit
        openModalEditView={openModalEditView}
        onChange={handleChangeModalEditView}
        setOpenModalEditView={setOpenModalEditView}
      ></CourseModalEdit>
      <div className="flex flex-wrap justify-center items-center">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="shadow-md rounded-md p-6 m-2 md:w-1/2 lg:w-1/3"
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-medium mb-2">{course.nombre}</h2>
              <CourseOptions viewIdCourseModal={course.id} role={role} />
            </div>
            <div className="py-1 border-t border-gray-300"></div>
            <p className="text-sm text-gray-500 mb-2">
              Fecha de inicio: {course.fechaInicio}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Fecha de finalización: {course.fechaFinalizacion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
