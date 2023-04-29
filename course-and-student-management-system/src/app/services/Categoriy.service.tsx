import database from "../../../api/database";
import { Cagories } from "@/app/model/Categories.model";


export const getCategory = async () => {
  return await database.get<Cagories[]>('/categorias/');
};