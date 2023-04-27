'use client';
import React, { useState } from 'react';
import NextLink from 'next/link';

interface FormData {
  email: '';
  password: '';
}
const LoginPage = () => {
  const [inputValues, setInputValues] = useState<FormData>({
    email: '',
    password: '',
  });
  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
    const formData = new FormData();
    formData.append('email', inputValues.email);
    formData.append('password', inputValues.password);
    let res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/auth/login/',
      {
        method: 'POST',
      }
    );
    console.log(res);
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
        <form
          className="flex flex-col justify-start text-black gap-6 w-1/2 my-5"
          onSubmit={(e) => handleSubmit(e)}
        >
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
              placeholder="correo@gmail.com"
              type="text"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.password}
              name="password"
              onChange={(e) => handleChangeValues(e)}
            />
          </div>
          <button
            className="border-2 bg-blue-800 text-neutral-50 rounded-lg p-2 self-end"
            type="submit"
          >
            Inicia sesion
          </button>
        </form>
        <hr className=" border-1 w-1/2 border-black rounded-full"></hr>
        <h3 className="text-black text-3xl">O</h3>
        <NextLink
          className="border-blue-800 border-1 text-blue-800 bg-blue-100 rounded-lg p-2 self-center mt-2"
          href="/auth/register"
        >
          Registrate
        </NextLink>
      </div>
    </div>
  );
};

export default LoginPage;
