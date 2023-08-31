import supertest from "supertest";
// import { server } from "../index";
import { server } from "../index";
import { initConnectionDB } from "../db";
import envConfigs from "../envConfigs";
import * as process from "process";

await initConnectionDB(
  envConfigs.dbName,
  envConfigs.dbUsername,
  envConfigs.dbPassword,
  envConfigs.dbHost
);

console.log("=================================================");

const request = supertest(server);
const url = "https://userway.org/";
const res = await request
  .post("/url")
  .send({ url })
  .set("Accept", "application/json")
  .expect("Content-Type", /json/)
  .expect(200);
console.log(res._body.originalUrl === url);

process.exit();
