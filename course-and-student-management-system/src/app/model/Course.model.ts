import { NumberOfStudents } from './NumberOfStudents';

export type Course = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  professor: string;
  number_of_students: NumberOfStudents[]; // Nueva propiedad para el número de estudiantes
  //Cambios en el tipo ajustado a la respuesta de la api
  title: string;
  tutor: string;
  categoria: string;
  fechaInicio: string;
  fechaFinalizacion: string;
};
