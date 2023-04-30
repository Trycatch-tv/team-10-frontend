'use client';
import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { AuthRegister } from '@/app/services/Auth.service';
import { validate } from './validate';
import { UserContext } from '@/app/hooks/UserContex';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  document: string;
  phone: string;
  password: string;
  repeatPassword: string;
  rol: string;
}
interface Errors extends FormData {
  general?: string;
}
const initialErrors = { name: '', document: '', email: '', password: '', phone: '', repeatPassword: '', general: '', rol: '' };

const RegisterPage = () => {
  const [mounted, setMounted] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [inputValues, setInputValues] = useState<FormData>({ ...initialErrors, rol: 'students' });
  const [errors, setErrors] = useState<Errors>({
    name: '',
    document: '',
    email: '',
    password: '',
    phone: '',
    repeatPassword: '',
    general: '',
    rol: '',
  });

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(initialErrors);
    let [isExistErrors, flag] = validate(inputValues);
    console.log(isExistErrors, flag);
    setErrors({ ...isExistErrors, rol: inputValues.rol });
    if (flag) {
      return;
    }
    const bodyRequest = {
      username: inputValues.name,
      cedula: inputValues.document,
      email: inputValues.email,
      password: inputValues.password,
      phone: Number(inputValues.phone.replace(' ', '')),
      rol: inputValues.rol,
    };
    const res: any = await AuthRegister(bodyRequest);
    if (res.status !== 201) {
      setErrors({ ...isExistErrors, rol: inputValues.rol, general: 'Ya existe una cuenta con ese correo' });
      return;
    }
    res.data.role = res.data.rol;
    res.data.name = res.data.username;
    if (res.statusText !== 'Created') {
      setErrors({ ...isExistErrors, rol: inputValues.rol, general: 'Ya existe una cuenta con ese correo' });
      return;
    }
    setUser({ isAuthenticated: true, ...res.data });
    router.replace('/pages/Courses');
    console.log(res);
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
      <div className="flex flex-col justify-center items-center w-full bg-neutral-100 h-full overflow-scroll">
        <h1 className="text-black">Logo</h1>
        <form className="flex flex-col justify-start text-black  w-1/2 my-5" onSubmit={(e) => handleSubmit(e)}>
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
            {errors.name && (
              <label htmlFor="input-nombre" className="text-red-600 text-xs ml-2">
                {errors.name}
              </label>
            )}
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
            {errors.email && (
              <label htmlFor="input-correo" className="text-red-600 text-xs ml-2">
                {errors.email}
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-cedula">Cedula:</label>
            <input
              id="input-cedula"
              placeholder="123456"
              type="text"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.document}
              name="document"
              onChange={(e) => handleChangeValues(e)}
            />
            {errors.document && (
              <label htmlFor="input-cedula" className="text-red-600 text-xs ml-2">
                {errors.document}
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-phone">Numero de telefono:</label>
            <input
              id="input-phone"
              placeholder="3133335544"
              type="tel"
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
              value={inputValues.phone}
              name="phone"
              onChange={(e) => handleChangeValues(e)}
            />
            {errors.phone && (
              <label htmlFor="input-phone" className="text-red-600 text-xs ml-2">
                {errors.phone}
              </label>
            )}
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
            {errors.password && (
              <label htmlFor="input-contraseña" className="text-red-600 text-xs ml-2">
                {errors.password}
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="input-repeat-contraseña">Repite tu contraseña:</label>
            <input
              id="input-repeat-contraseña"
              placeholder="*******"
              type="password"
              value={inputValues.repeatPassword}
              name="repeatPassword"
              onChange={(e) => handleChangeValues(e)}
              className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black"
            />
            {errors.repeatPassword && (
              <label htmlFor="input-repeat-contraseña" className="text-red-600 text-xs ml-2">
                {errors.repeatPassword}
              </label>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="selectValue">Rol:</label>
            <select id="selectValue" name="rol" onChange={(e) => handleChangeValues(e)} className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400 text-black">
              <option value="estudiante">Estudiante</option>
              <option value="profesor">Profesor</option>
            </select>
          </div>
          {errors.general && <h2 className="text-red-600 text-lg font-semibold ml-2 self-center">{errors.general}</h2>}
          <button className="border-2 bg-blue-800 text-neutral-50 rounded-lg p-2 self-end mt-2" type="submit">
            Registrarme
          </button>
        </form>
        <hr className=" border-1 w-1/2 border-black rounded-full"></hr>
        <h3 className="text-black text-2xl">O</h3>
        <NextLink className="border-blue-800 border-1 text-blue-800 bg-blue-100 rounded-lg p-2 self-center mt-1" href="/auth/login">
          Inicia sesion
        </NextLink>
      </div>
    </div>
  );
};

export default RegisterPage;
