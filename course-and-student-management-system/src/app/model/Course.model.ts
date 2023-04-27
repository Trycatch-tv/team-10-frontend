import { User } from "./User.model";

export type Course = {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    professor: string;
    number_of_students: User[];
  };