import { Sequelize } from "sequelize";
import * as process from "process";
import { initTables, syncTables } from "./models/url.model";
let dbInstance: ConnectionDB;

class ConnectionDB {
  private _db: Sequelize;
  get db(): Sequelize {
    return this._db;
  }
  constructor(
    private dbName: string,
    private dbUsername: string,
    private dbPassword: string,
    private dbHost: string
  ) {
    this._db = new Sequelize(this.dbName, this.dbUsername, this.dbPassword, {
      dialect: "mysql",
      host: this.dbHost,
      port: 3306,
      pool: {
        max: 10,
        min: 0,
        idle: 10000,
      },
      dialectOptions: {
        options: { encrypt: true },
      },
    });
  }

  async closeConnection(): Promise<void> {
    await this._db.close();
  }

  async authenticate(): Promise<void> {
    await this._db.authenticate();
  }
}

export const initConnectionDB = async (
  dbName: string,
  dbUsername: string,
  dbPassword: string,
  dbHost: string
): Promise<ConnectionDB> => {
  try {
    dbInstance = new ConnectionDB(dbName, dbUsername, dbPassword, dbHost);
    await dbInstance.authenticate();
    console.log("DB Connected");
    initTables(dbInstance.db);
    await syncTables();
    return dbInstance;
  } catch (e) {
    console.error(e);
    process.exit();
  }
};

export default ConnectionDB;
