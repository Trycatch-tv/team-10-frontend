export type User = {
  isAuthenticated?: boolean;
  id: number;
  name: string;
  cedula: string;
  email: string;
  phone: string;
  role?: 'admin' | 'students' | 'teacher' | '';
};
