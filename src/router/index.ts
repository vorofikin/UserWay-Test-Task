import { Router } from "express";
import urlRouter from "./url/index";
const router: Router = Router();
router.use("/url", urlRouter);

export default router;
