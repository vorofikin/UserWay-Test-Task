import { Router } from "express";

const router = Router();

router.get("", async (req, res) => {
  await res.json({ message: "Dogshouseservice.Version1.0.1" });
});

export default router;
