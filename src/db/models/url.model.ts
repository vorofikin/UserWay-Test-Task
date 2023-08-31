import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { nanoid } from "nanoid";

export interface IUrl {
  originalUrl: string;
  shortUrl: string;
}

export interface IUrlTable extends IUrl {
  readonly id: number;
}

export default class Url
  extends Model<IUrlTable, Optional<IUrlTable, "id">>
  implements IUrlTable
{
  public originalUrl!: string;
  readonly id!: number;
  public shortUrl!: string;
}

export const initTables = (dbInstance: Sequelize) => {
  Url.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: nanoid(),
      },
    },
    { sequelize: dbInstance, timestamps: false }
  );
};

export const syncTables = async (): Promise<void> => {
  try {
    await Url.sync({ hooks: false });
  } catch (e) {
    console.error(e);
  }
};
