import { UserContext } from '@/app/hooks/UserContex';
import axios from 'axios';
import { useContext } from 'react';

export const AuthLogin = async ({ email, password }: { email: string; password: string }) => {
//   const { user, setUser } = useContext(UserContext);
  console.log(email, password)
  try {
    // const response = await axios.post('/api/login', { email, password });
    // if (response.status === 200) {
    //   console.log('Inicio de sesión exitoso:', response.data);
    //   setUser({isAuthenticated: true ,...response.data});
    // } else {
    //   console.log('Error de inicio de sesión:', response.data);
    // }
  } catch (error) {
    // console.log('Error en la solicitud:', error);
  }
};
