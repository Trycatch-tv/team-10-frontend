import { Course } from "@/app/model/Course.model";
import { User } from "@/app/model/User.model";



export const studentsArray1: User[] = [
  {
    id: 1,
    role: 'admin',
    name: 'Pepe Perez',
    cedula: '1111111111',
    email: 'estudiante1-1@example.com',
    phone: '111-111-1111',
  },
  {
    id: 2,
    role: 'admin',
    name: 'Estudiante 1-2',
    cedula: '2222222222',
    email: 'estudiante1-2@example.com',
    phone: '222-222-2222',
  },
  {
    id: 3,
    role: 'admin',
    name: 'Estudiante 1-3',
    cedula: '3333333333',
    email: 'estudiante1-3@example.com',
    phone: '333-333-3333',
  },
  {
    id: 4,
    role: 'admin',
    name: 'Estudiante 1-4',
    cedula: '4444444444',
    email: 'estudiante1-4@example.com',
    phone: '444-444-4444',
  },
  {
    id: 5,
    role: 'admin',
    name: 'Estudiante 1-5',
    cedula: '5555555555',
    email: 'estudiante1-5@example.com',
    phone: '555-555-5555',
  },
];

// Array 2
export const studentsArray2: User[] = [
  {
    id: 6,
    role: 'students',
    name: 'Chaguendo Rivales',
    cedula: '6666666666',
    email: 'estudiante2-1@example.com',
    phone: '666-666-6666',
  },
  {
    id: 7,
    role: 'students',
    name: 'Estudiante 2-2',
    cedula: '7777777777',
    email: 'estudiante2-2@example.com',
    phone: '777-777-7777',
  },
  {
    id: 8,
    role: 'students',
    name: 'Estudiante 2-3',
    cedula: '8888888888',
    email: 'estudiante2-3@example.com',
    phone: '888-888-8888',
  },
  {
    id: 9,
    role: 'students',
    name: 'Estudiante 2-4',
    cedula: '9999999999',
    email: 'estudiante2-4@example.com',
    phone: '999-999-9999',
  },
  {
    id: 10,
    role: 'students',
    name: 'Estudiante 2-5',
    cedula: '1010101010',
    email: 'estudiante2-5@example.com',
    phone: '101-010-1010',
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'Curso 1-1',
    description: 'Descripción del Curso 1-1',
    startDate: '2023-04-01',
    endDate: '2023-05-01',
    professor: 'Profesor 1',
    number_of_students: studentsArray1,
  },
  {
    id: 2,
    title: 'Curso 1-2',
    description: 'Descripción del Curso 1-2',
    startDate: '2023-04-15',
    endDate: '2023-05-15',
    professor: 'Profesor 2',
    number_of_students: [],
  },
  {
    id: 3,
    title: 'Curso 1-3',
    description: 'Descripción del Curso 1-3',
    startDate: '2023-05-01',
    endDate: '2023-06-01',
    professor: 'Profesor 3',
    number_of_students: [],
  },
  {
    id: 4,
    title: 'Curso 1-4',
    description: 'Descripción del Curso 1-4',
    startDate: '2023-06-01',
    endDate: '2023-07-01',
    professor: 'Profesor 4',
    number_of_students: studentsArray2,
  },
];