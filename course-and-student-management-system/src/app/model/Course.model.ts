import { User } from "./User.model";
import { Cagories } from "./Categories.model";

export type Course = {
  id: number;
  nombre: string;
  descripcion: string;
  profesor: string;
  categoria: number[];
  categorias?: Cagories[];
  fechaInicio: string;
  fechaFinalizacion: string;
  number_of_students: User[];
};