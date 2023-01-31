import sequelize from "../config/db.config.js";
import { Sequelize } from 'sequelize';

// define your model
const Chickens = sequelize.define('Chickens', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});


// use the model to query the database
const getChickens = async () => {
  const users = await Chickens.findAll();
  return users;
};

export default getChickens;