/**
 * This creates the model for tasks containing id, name, 
 * status, createdAt, and updatedAt which represents completedAt
 */

import sequelize from '../config/config';
import Sequelize from 'sequelize';

const Tasks = sequelize.define('Tasks', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: Sequelize.DATEONLY
  },
  updatedAt: {
    type: Sequelize.DATEONLY,
  }
});

module.exports = Tasks;