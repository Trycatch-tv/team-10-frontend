'use client';

import React, { useContext, useState } from 'react';
import NextLink from 'next/link';
import { AuthLogin } from '@/app/services/Auth.service';
import { UserContext } from '@/app/hooks/UserContex';
import { validate } from './validate';
import { useRouter } from 'next/navigation';
import { User } from '@/app/model/User.model';


interface FormData {
  email: string;
  password: string;
}
interface Errors extends FormData {
  general?: string;
}
const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [inputValues, setInputValues] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({
    email: '',
    password: '',
    general: '',
  });
  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ email: '', password: '', general: '' });
    let isExistErrors = validate(inputValues);
    setErrors(isExistErrors);
    if (isExistErrors.email || isExistErrors.password) {
      return;
    }

    const response: any = await AuthLogin(inputValues);
    console.log(response);
    if (response.status !== 200) {
      setErrors({ ...isExistErrors, general: 'erros en tus credenciales,por favor verifica' });
      return;
    }
    response.data.role = response.data.rol;
    response.data.name = response.data.username;
    setUser({ isAuthenticated: true, ...response.data });

    if (response.statusText !== 'OK') {
      setErrors({ ...isExistErrors, general: 'erros en tus credenciales,por favor verifica' });
      return;
    }
    setUser({ isAuthenticated: true, ...response });

    router.replace('/pages/Courses');
  };

  return (
    <div className="flex h-screen">
      <img
        src="https://images.pexels.com/photos/207569/pexels-photo-207569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="student-image"
        className="aspect-auto w-3/5 h-screen hidden sm:block min-w-3/5"
      />
      <div className="flex flex-col justify-center items-center w-full bg-neutral-100 h-full">
        <h1 className="text-black">Logo</h1>
        <form className="flex flex-col justify-start text-black gap-6 w-1/2 my-5" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col">
            <label htmlFor="input-correo">Correo:</label>
            <input
              id="input-correo"
              placeholder="correo@gmail.com"
              type="text"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.email}
              name="email"
              onChange={(e) => handleChangeValues(e)}
            />
            {errors.email && (
              <label htmlFor="input-correo" className="text-red-600 text-xs ml-2">
                {errors.email}:
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-contraseña">Contraseña:</label>
            <input
              id="input-contraseña"
              placeholder="password"
              type="password"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.password}
              name="password"
              onChange={(e) => handleChangeValues(e)}
            />
            {errors.password && (
              <label htmlFor="input-contraseña" className="text-red-600 text-xs ml-2">
                {errors.password}:
              </label>
            )}
          </div>
          {errors.general && <p className="text-red-600 text-sm ml-2 font-semibold">{errors.general}</p>}
          <button className="border-2 bg-blue-800 text-neutral-50 rounded-lg p-2 self-end" type="submit">
            Inicia sesion
          </button>
        </form>
        <hr className=" border-1 w-1/2 border-black rounded-full"></hr>
        <h3 className="text-black text-3xl">O</h3>
        <NextLink className="border-blue-800 border-1 text-blue-800 bg-blue-100 rounded-lg p-2 self-center mt-2" href="/auth/register">
          Registrate
        </NextLink>
      </div>
    </div>
  );
};

export default LoginPage;
