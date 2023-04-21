'use client';
import { useEffect, useState } from 'react';

import { getUserById } from '../../api/services/User.service';
import { User } from '../../model/User.model';
import HomeModalEdit from '@/app/components/HomeModalEdit';

const Home: React.FC = () => {
  const [students, setStudents] = useState<User>();

  const [openModalEditView, setOpenModalEditView] = useState(false);

  const handleChangeModalEditView = () => {
    setOpenModalEditView(!openModalEditView);
  };

  useEffect(() => {
    const studentsData = getUserById(1);
    setStudents(studentsData!);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-wrap max-w-3xl mx-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-center items-center m-4">
            <div className="w-40 h-40 rounded-full bg-gray-500"></div>
          </div>
          <div className="flex-1 flex-wrap p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Información Personal</h2>
              <p className="text-gray-500">Nombre: {students?.name ? students?.name : ''}</p>
              <p className="text-gray-500">Cédula: {students?.cedula}</p>
              <p className="text-gray-500">Email: {students?.email}</p>
              <p className="text-gray-500">Teléfono: {students?.phone}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <button onClick={handleChangeModalEditView} className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500">Editar perfil</button>
            </div>
          </div>
        </div>
      </div>
      <HomeModalEdit openModalEditView={openModalEditView} onChange={handleChangeModalEditView} setOpenModalEditView={setOpenModalEditView} idUserModal={students?.id!}></HomeModalEdit>
    </>
  );
};

export default Home;