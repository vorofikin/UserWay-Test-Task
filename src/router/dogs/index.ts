import { Router } from "express";
import DogsService from "./dogs.service";
import DogsMiddleware from "./dogs.middleware";
import { check } from "express-validator";
import { IDogTable } from "../../db/models/dogs.model";
import { IQueryParams } from "./dogs.service.interface";
const router = Router();

router.get("", async (req, res) => {
  const {
    attribute = "name",
    order = "desc",
    pageNumber = "1",
    limit = "15",
  } = req.query as IQueryParams;
  try {
    const dogs = await DogsService.getDogs({
      limit: typeof limit === "string" ? parseInt(limit) : limit,
      pageNumber:
        typeof pageNumber === "string" ? parseInt(pageNumber) : pageNumber,
      attribute,
      order,
    });
    await res.json(dogs);
  } catch (e) {
    res.json(e);
  }
});
router.post(
  "",
  [
    check(
      ["name", "color", "tail_length", "weight"],
      "color cannot be empty"
    ).notEmpty(),
    DogsMiddleware.addDogMiddleware,
  ],
  async (req, res) => {
    const { name, color, tail_length, weight } = req.body;
    try {
      const dog: IDogTable = await DogsService.addDog({
        name,
        color,
        tail_length,
        weight,
      });
      await res.json(dog);
    } catch (e) {
      res.json(e);
    }
  }
);

export default router;
