import UrlModel, { IUrlTable } from "../../db/models/url.model";
import { nanoid } from "nanoid";
import { IUrlService } from "./url.service.interface";
// import { RedisConnection } from "../../redis";
// import redisClient from "../../redis";
import { redisClient } from "../../index";

class UrlService implements IUrlService {
  constructor() {
    // this.redisClient = new RedisConnection()
  }

  async addUrl(originalUrl: string): Promise<IUrlTable> {
    const id = nanoid(8);
    return await UrlModel.create({
      originalUrl,
      shortUrl: id,
    });
  }

  async getFullUrl(shortUrl: string): Promise<string> {
    try {
      const cacheUrl = await redisClient.get(shortUrl);
      console.log(`cache: ${cacheUrl}`);
      if (cacheUrl) return cacheUrl;
      const url = await UrlModel.findOne({
        attributes: ["originalUrl"],
        where: {
          shortUrl,
        },
        raw: true,
      });
      if (url?.originalUrl) redisClient.set(shortUrl, url?.originalUrl);
      return url?.originalUrl;
    } catch (e) {
      console.error(e);
    }
  }
}
export default new UrlService();
