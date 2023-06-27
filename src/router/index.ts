import { Router } from "express";
import pingRouter from "./ping";
import dogRouter from "./dogs/index";
const router: Router = Router();
router.use("/ping", pingRouter);
router.use("/dogs", dogRouter);
export default router;
