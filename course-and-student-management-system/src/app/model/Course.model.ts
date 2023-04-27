<<<<<<< HEAD
import { NumberOfStudents } from "./User.model";
=======
import { NumberOfStudents } from './NumberOfStudents';
>>>>>>> a04c119022ffc40c18d97629efc36a1c8d13ff1d

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
