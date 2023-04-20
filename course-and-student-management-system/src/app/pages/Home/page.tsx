'use client';
import { useEffect, useState } from 'react';

import { getStudentsById } from '../../api/services/students.service';
// import { Students } from '../model/Students.model';

const Home: React.FC = () => {
  // const [students, setStudents] = useState<Students>();

  useEffect(() => {
    // const studentsData = getStudentsById('1');
    // setStudents(studentsData!);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap max-w-3xl mx-4 bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center m-4">
          <div className="w-40 h-40 rounded-full bg-gray-500"></div>
        </div>
        <div className="flex-1 flex-wrap p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Información Personal</h1>
            <p className="text-gray-500">Nombre: John Doe</p>
            <p className="text-gray-500">Cédula: 12345678</p>
            <p className="text-gray-500">Email: john.doe@example.com</p>
            <p className="text-gray-500">Teléfono: +1 (123) 456-7890</p>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <button className="bg-blue-500 m-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4">Cursos</button>
            <button className="bg-blue-500 m-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4">Estudiantes</button>
            <button className="bg-blue-500 m-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4">Profesores</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
