import * as dotenv from "dotenv";
import * as process from "process";
dotenv.config({ path: "./.env" });

interface IConfigs {
  readonly dbName: string;
  readonly dbUsername: string;
  readonly dbPassword: string;
  readonly dbHost: string;
}
export default {
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUsername: process.env.DB_USERSNAME,
  dbHost: process.env.DB_HOST,
} as IConfigs;
