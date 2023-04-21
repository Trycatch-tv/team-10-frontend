'use client';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';

interface FormData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterPage = () => {
  const [mounted, setMounted] = useState(false);
  const [inputValues, setInputValues] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChangeValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <div className="flex h-screen">
      <img
        src="https://images.pexels.com/photos/7989136/pexels-photo-7989136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="student-image"
        className="aspect-auto w-3/5 h-screen hidden sm:block min-w-3/5"
      />
      <div className="flex flex-col justify-center items-center w-full bg-neutral-100 h-full">
        <h1 className="text-black">Logo</h1>
        <form
          className="flex flex-col justify-start text-black gap-6 w-1/2 my-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <label htmlFor="input-nombre">Tu nombre:</label>
            <input
              id="input-nombre"
              placeholder="pedro perez"
              type="text"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.name}
              name="name"
              onChange={(e) => handleChangeValues(e)}
            />
          </div>
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
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-contraseña">Contraseña:</label>
            <input
              id="input-contraseña"
              placeholder="*******"
              type="password"
              value={inputValues.password}
              name="password"
              onChange={(e) => handleChangeValues(e)}
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-repeat-contraseña">
              Repite tu contraseña:
            </label>
            <input
              id="input-repeat-contraseña"
              placeholder="*******"
              type="password"
              value={inputValues.repeatPassword}
              name="repeatPassword"
              onChange={(e) => handleChangeValues(e)}
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="selectValue">Rol:</label>
            <select
              id="selectValue"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              name="rol"
              onChange={(e) => handleChangeValues(e)}
            >
              <option>Estudiante</option>
              <option>Profesor</option>
            </select>
          </div>
          <button
            className="border-2 bg-blue-800 text-neutral-50 rounded-lg p-2 self-end"
            type="submit"
          >
            Registrarme
          </button>
        </form>
        <hr className=" border-1 w-1/2 border-black rounded-full"></hr>
        <h3 className="text-black text-3xl">O</h3>
        <NextLink
          className="border-blue-800 border-1 text-blue-800 bg-blue-100 rounded-lg p-2 self-center mt-2"
          href="/auth/login"
        >
          Inicia sesion
        </NextLink>
      </div>
    </div>
  );
};

export default RegisterPage;
