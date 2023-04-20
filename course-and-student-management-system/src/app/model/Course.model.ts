import { NumberOfStudents } from "./Students.model";

export type Course = {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    professor: string;
    number_of_students: NumberOfStudents[]; // Nueva propiedad para el número de estudiantes
  };