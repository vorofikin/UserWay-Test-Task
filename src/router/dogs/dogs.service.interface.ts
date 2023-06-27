import DogModel, { IDog, IDogTable } from "../../db/models/dogs.model";

export interface IGetDogsReq {
  attribute: string;
  order: string;
  pageNumber: number;
  limit: number;
}

export interface IQueryParams {
  attribute?: string;
  order?: string;
  pageNumber?: number;
  limit?: number;
}

export interface IGetDogsRes {
  totalPages: number;
  currentPage: DogModel[];
}

export abstract class IDogService {
  abstract getDogs({}: IQueryParams): Promise<IGetDogsRes>;
  abstract addDog({}: IDog): Promise<IDogTable>;
}
