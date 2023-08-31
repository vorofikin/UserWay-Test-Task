import UrlModel, { IUrlTable } from "../../db/models/url.model";

export abstract class IUrlService {
  abstract addUrl(originalUrl: string): Promise<IUrlTable>;
  abstract getFullUrl(shortUrl: string): Promise<string>;
}
