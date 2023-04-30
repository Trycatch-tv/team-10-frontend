'use client';

import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { UserContext } from '@/app/hooks/UserContex';
import { useRouter } from 'next/navigation';
import { AuthLogout } from '../services/Auth.service';

const Header = () => {
  const router = useRouter();
  const { user, setUser, cleanUserData } = useContext(UserContext);

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push('/auth/login');
    }
  }, []);
  const handleLogout = async () => {
    await AuthLogout();
    cleanUserData();
    router.push('/');
  };
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container flex justify-between items-center p-5">
          <div className="flex items-center justify-center sm:justify-start mr-4">Logo</div>
          <div className="flex flex-1 items-center justify-center sm:justify-start space-x-4">
            <input type="text" placeholder="Buscar..." className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400" />
            <Link href="/" className="text-white hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/pages/Courses" className="text-white hover:text-gray-400">
              Cursos
            </Link>

            <Link href="/pages/AboutUs" className="text-white hover:text-gray-400">
              Sobre nosotros
            </Link>

            {user.role === 'admin' ? (
              <>
                <Link href="/pages/User" className="text-white hover:text-gray-400">
                  Usuarios
                </Link>
              </>
            ) : (
              <></>
            )}
            <Link href="/pages/AboutUs" className="text-white hover:text-gray-400">
              Sobre nosotros
            </Link>
          </div>
          <div>
            {user.isAuthenticated && (
              <>
                <Link href="/pages/Perfil" className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500">
                  Perfil
                </Link>
                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500 m-2" onClick={handleLogout}>
                  Cerrar sesion
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
