import DogModel, { IDog, IDogTable } from "../../db/models/dogs.model";
import {
  IDogService,
  IGetDogsRes,
  IQueryParams,
} from "./dogs.service.interface";

class DogsService implements IDogService {
  constructor() {}

  async getDogs({
    attribute = "name",
    order = "asc",
    pageNumber = 1,
    limit = 10,
  }: IQueryParams): Promise<IGetDogsRes> {
    if (pageNumber === 0) {
      pageNumber = 1;
    }
    const { count, rows } = await DogModel.findAndCountAll({
      order: [[attribute, order]],
      offset: (pageNumber - 1) * limit,
      limit,
      raw: true,
    });
    return {
      totalPages: Math.ceil(count / limit),
      currentPage: rows,
    };
  }

  async addDog({ name, color, tail_length, weight }: IDog): Promise<IDogTable> {
    return await DogModel.create({
      name,
      color,
      tail_length,
      weight,
    });
  }
}
export default new DogsService();
