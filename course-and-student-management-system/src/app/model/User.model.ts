export type User = {
  isAuthenticated?: boolean;
  id: number;
  username: string;
  cedula: string;
  email: string;
  phone: string;
  role?: 'admin' | 'students' | 'teacher' | '';
};
