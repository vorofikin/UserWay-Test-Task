import { Router } from "express";
import UrlService from "./url.service";
const router = Router();

router.post("/", async (req, res) => {
  const { url = "", shortUrl = "" } = req.body;
  try {
    if (url.length) {
      const shortenedUrl = await UrlService.addUrl(url);
      await res.json(shortenedUrl);
    } else if (shortUrl.length) {
      const originalUrl = await UrlService.getFullUrl(shortUrl);
      res.json(originalUrl);
    } else {
      return res.status(404).send("url cannot be empty");
    }
  } catch (e) {
    res.status(404).send(`Error occurred while creating short Url: ${e}`);
  }
});

router.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  if (!shortUrl) {
    res.status(404).send("Url should be provided");
  }
  try {
    const url = await UrlService.getFullUrl(shortUrl);
    res.redirect(url);
  } catch (e) {
    res.status(404).send("URL not found");
  }
});

export default router;
