const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2"); // Vercel
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    dialectModule: mysql2, // Vercel
    pool: {
      max: 5, // Máximo de conexiones en el grupo
      min: 0, // Mínimo de conexiones en el grupo
      acquire: 30000, // Tiempo máximo, para liberar conexiones inactivas
      idle: 10000, // Tiempo máximo para cerrar conexiones inactivas
    },
  }
);

module.exports = sequelize;
