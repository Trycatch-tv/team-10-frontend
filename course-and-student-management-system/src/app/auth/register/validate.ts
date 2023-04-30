interface props {
  name: string;
  email: string;
  document: string;
  phone: string;
  password: string;
  repeatPassword: string;
  general?: string;
}

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validate = ({ email, password, document, general, name, phone, repeatPassword }: props): [props, boolean] => {
  let errors = { name: '', document: '', email: '', password: '', phone: '', repeatPassword: '', general: '' };
  let flag = false;
  if (!email) {
    flag = true;
    errors = { ...errors, email: 'Ingrese su correo' };
  }
  if (!regexEmail.test(email)) {
    flag = true;
    errors = { ...errors, email: 'Ingresa un email valido' };
  }
  if (!password) {
    flag = true;
    errors = { ...errors, password: 'Ingrese su contraseña' };
  }
  if (password.length < 8) {
    flag = true;
    errors = { ...errors, password: 'La contraseña debe ser mayor a 8 caracteres' };
  }
  if (!document) {
    flag = true;
    errors = { ...errors, document: 'Ingrese su numero de cedula' };
  }
  if (!name) {
    flag = true;
    errors = { ...errors, name: 'Ingrese su primer nombre y primer apellido' };
  }
  if (!phone) {
    flag = true;
    errors = { ...errors, phone: 'Ingrese su numero de telefono' };
  }
  if (!repeatPassword) {
    flag = true;
    errors = { ...errors, repeatPassword: 'Repita la contraseña' };
  }
  if (repeatPassword !== password) {
    flag = true;
    errors = { ...errors, repeatPassword: 'Las contraseñas no coinciden' };
  }
  return [errors, flag];
};
