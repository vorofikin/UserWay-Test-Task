import { Sequelize, DataTypes, Model, Optional } from "sequelize";

export interface IDog {
  name: string;
  color: string;
  tail_length: number;
  weight: number;
}

export interface IDogTable extends IDog {
  readonly id: number;
}

export default class Dog
  extends Model<IDogTable, Optional<IDogTable, "id">>
  implements IDogTable
{
  public color!: string;
  readonly id!: number;
  public name!: string;
  public tail_length!: number;
  public weight!: number;
}

export const initTables = (dbInstance: Sequelize) => {
  Dog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tail_length: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize: dbInstance, timestamps: false }
  );
};

export const syncTables = async (): Promise<void> => {
  try {
    await Dog.sync({ hooks: false });
  } catch (e) {
    console.error(e);
  }
};
