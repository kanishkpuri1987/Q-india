"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('qindia', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
var connection = sequelize.authenticate().then(() => { sequelize; });
exports.default = {
    Connection: connection,
};
//# sourceMappingURL=DatabaseConnection.js.map