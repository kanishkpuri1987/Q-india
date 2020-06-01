

import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';



const sequelize = new Sequelize('qindia', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',

    dialect: 'mysql' ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  var connection=sequelize.authenticate().then(() =>{sequelize});


export default {
    Connection:connection,
  
}; 
 