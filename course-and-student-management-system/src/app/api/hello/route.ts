type NumberOfStudents = {
  name: string;
  cedula: string;
  email: string;
  phone: string;
};

type Course = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  professor: string;
  number_of_students: NumberOfStudents[]; // Nueva propiedad para el número de estudiantes
};


const studentsArray1: NumberOfStudents[] = [
  {
    name: 'Pepe Perez',
    cedula: '1111111111',
    email: 'estudiante1-1@example.com',
    phone: '111-111-1111',
  },
  {
    name: 'Estudiante 1-2',
    cedula: '2222222222',
    email: 'estudiante1-2@example.com',
    phone: '222-222-2222',
  },
  {
    name: 'Estudiante 1-3',
    cedula: '3333333333',
    email: 'estudiante1-3@example.com',
    phone: '333-333-3333',
  },
  {
    name: 'Estudiante 1-4',
    cedula: '4444444444',
    email: 'estudiante1-4@example.com',
    phone: '444-444-4444',
  },
  {
    name: 'Estudiante 1-5',
    cedula: '5555555555',
    email: 'estudiante1-5@example.com',
    phone: '555-555-5555',
  },
];

// Array 2
const studentsArray2: NumberOfStudents[] = [
  {
    name: 'Chaguendo Rivales',
    cedula: '6666666666',
    email: 'estudiante2-1@example.com',
    phone: '666-666-6666',
  },
  {
    name: 'Estudiante 2-2',
    cedula: '7777777777',
    email: 'estudiante2-2@example.com',
    phone: '777-777-7777',
  },
  {
    name: 'Estudiante 2-3',
    cedula: '8888888888',
    email: 'estudiante2-3@example.com',
    phone: '888-888-8888',
  },
  {
    name: 'Estudiante 2-4',
    cedula: '9999999999',
    email: 'estudiante2-4@example.com',
    phone: '999-999-9999',
  },
  {
    name: 'Estudiante 2-5',
    cedula: '1010101010',
    email: 'estudiante2-5@example.com',
    phone: '101-010-1010',
  },
];

const courses: Course[] = [
  {
    id: 1,
    name: 'Curso 1-1',
    description: 'Descripción del Curso 1-1',
    startDate: '2023-04-01',
    endDate: '2023-05-01',
    professor: 'Profesor 1',
    number_of_students: studentsArray1,
  },
  {
    id: 2,
    name: 'Curso 1-2',
    description: 'Descripción del Curso 1-2',
    startDate: '2023-04-15',
    endDate: '2023-05-15',
    professor: 'Profesor 2',
    number_of_students: [],
  },
  {
    id: 3,
    name: 'Curso 1-3',
    description: 'Descripción del Curso 1-3',
    startDate: '2023-05-01',
    endDate: '2023-06-01',
    professor: 'Profesor 3',
    number_of_students: [],
  },
  {
    id: 4,
    name: 'Curso 1-4',
    description: 'Descripción del Curso 1-4',
    startDate: '2023-06-01',
    endDate: '2023-07-01',
    professor: 'Profesor 4',
    number_of_students: studentsArray2,
  },
];

export default courses;