import express from "express";
import router from "./router";
import envConfigs from "./envConfigs";
import { initConnectionDB } from "./db";
const app = express();

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running on port 5000"));

await initConnectionDB(
  envConfigs.dbName,
  envConfigs.dbUsername,
  envConfigs.dbPassword,
  envConfigs.dbHost
);
