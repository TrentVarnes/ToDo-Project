import { Sequelize } from "sequelize";

const db = new Sequelize('database_development', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

 export async function dbConnect() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 };
