import ConnectionDB, { initConnectionDB } from "./index";
import DogsService from "../router/dogs/dogs.service";
import envConfigs from "../envConfigs";
import { IDog } from "./models/dogs.model";
import * as process from "process";

const initData: IDog = {
  name: "Neo",
  color: "red&amber",
  tail_length: 22,
  weight: 32,
};
const initDb = async (): Promise<void> => {
  const dbInstance: ConnectionDB = await initConnectionDB(
    envConfigs.dbName,
    envConfigs.dbUsername,
    envConfigs.dbPassword,
    envConfigs.dbHost
  );
  await DogsService.addDog(initData);
  console.log("DB initialized");
  await dbInstance.closeConnection();
  process.exit();
};
initDb();
