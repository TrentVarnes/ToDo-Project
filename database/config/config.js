/**
 * Connects to my local database using my login credentials 
 */

import { Sequelize } from "sequelize";

const sequelize = new Sequelize('task', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

sequelize.sync();
module.exports = sequelize;