import { clientApi } from "@/api";
import { CategoryDto } from "@/api/static/dto";

export const getCategories = (): Promise<CategoryDto[]> => {
  return clientApi.get<CategoryDto[]>('/category');
};

export const getTags = (): Promise<CategoryDto[]> => {
  return clientApi.get<CategoryDto[]>('/tag');
};