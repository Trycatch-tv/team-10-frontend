import axios from 'axios';

export const AuthLogin = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/auth/login/', { email, password });
    if (response.status === 200) {
      console.log('Inicio de sesión exitoso:', response.data);
    } else {
      console.log('Error de inicio de sesión:', response.data);
    }
    return response;
  } catch (error) {
    console.log('Error en la solicitud:', error);
    return error;
  }
};
interface PropsRegister {
  username: string;
  cedula: string;
  email: string;
  password: string;
  phone: number;
  rol: string;
}
export const AuthRegister = async ({ email, password, phone, cedula, rol, username }: PropsRegister) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/auth/signup/', { email, password, phone, cedula, username, rol });

    return response;
  } catch (error) {
    // console.log('Error en la solicitud:', error);
    return error;
  }
};
