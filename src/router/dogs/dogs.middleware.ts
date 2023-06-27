import DogModel from "../../db/models/dogs.model";
import { validationResult } from "express-validator";
class DogsMiddleware {
  constructor() {}

  async addDogMiddleware(req, res, next) {
    const checkErrors = validationResult(req);
    if (!checkErrors.isEmpty()) {
      return res
        .status(404)
        .send(
          "fields 'color', 'tail-Length', 'name' and 'weight' cannot be empty"
        );
    }
    const { name, tail_length, weight } = req.body;
    const isDogExists: boolean = !!(await DogModel.findOne({
      where: {
        name: name,
      },
      raw: true,
    }));
    if (isDogExists) {
      res.status(404).send(`Dog with name ${name} already exists`);
      return;
    }
    if (isNaN(parseInt(tail_length)) || isNaN(parseInt(weight))) {
      res
        .status(404)
        .send("Please provide 'tail_length' and 'weight' as the numbers");
      return;
    }
    next();
  }
}

export default new DogsMiddleware();
