'use client';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getUserById } from '../../services/User.service';
import { User } from '../../model/User.model';
import HomeModalEdit from '@/app/components/HomeModalEdit';
import { UserContext } from '@/app/hooks/UserContex';

const formatName = (name: string) => {
  return name
    .split(' ')
    .splice(0, 2)
    .map((l: string) => l[0].toUpperCase())
    .join('');
};

const Perfil: React.FC = () => {
  const router = useRouter();
  const [students, setStudents] = useState<User>();
  const [openModalEditView, setOpenModalEditView] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleChangeModalEditView = () => {
    setOpenModalEditView(!openModalEditView);
  };

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push('/auth/login');
    }
    const studentsData = user;
    setStudents(studentsData!);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-wrap max-w-3xl mx-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-center items-center m-4">
            <div className="w-40 h-40 rounded-full bg-gray-500 grid place-content-center">
              <h1 className="text-neutral-200 text-4xl">{user.username && formatName(user.username)}</h1>
            </div>
          </div>
          <div className="flex-1 flex-wrap p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Información Personal</h2>
              <p className="text-gray-500">Nombre: {user?.username ? user?.username : ''}</p>
              <p className="text-gray-500">Cédula: {user?.cedula}</p>
              <p className="text-gray-500">Email: {user?.email}</p>
              <p className="text-gray-500">Teléfono: {user?.phone}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <button onClick={handleChangeModalEditView} className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500">
                Editar perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomeModalEdit openModalEditView={openModalEditView} onChange={handleChangeModalEditView} setOpenModalEditView={setOpenModalEditView} idUserModal={students?.id!}></HomeModalEdit>
    </>
  );
};

export default Perfil;
