interface props {
  email: string;
  password: string;
  general?: string;
}
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validate = ({ email, password }: props) => {
  let errors: props = {
    email: '',
    password: '',
    general: '',
  };
  if (!email) {
    errors = { ...errors, email: 'Ingrese su correo' };
  }
  if (!regexEmail.test(email)) {
    errors = { ...errors, email: 'Ingresa un email valido' };
  }
  if (!password) {
    errors = { ...errors, password: 'Ingrese su contraseña' };
  }
  return errors;
};
