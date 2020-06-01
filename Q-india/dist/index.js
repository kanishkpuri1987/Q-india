"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_Parser_1 = __importDefault(require("cookie-Parser"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const hpp_1 = __importDefault(require("hpp"));
//var express = require('express'),
//bodyparser = require('body-parser'),
//logger = require('morgan'),
//cookieParser = require('cookie-parser'),
// session = require('express-session'),
// cors = require('cors'),
// dotenv=require('dotenv').config(),
// compression = require('compression'),
// db  = require('./config/DatabaseConnection'),
// hpp = require('hpp');
dotenv_1.default.config();
const app = express_1.default();
console.log(process.env.ApiBaseUrl);
var port = process.env.Port;
var ApiBaseUrl = process.env.ApiBaseUrl;
console.log(port);
app.use(morgan_1.default("combined"));
app.use(cors_1.default());
app.use(compression_1.default());
app.use(cookie_Parser_1.default());
app.use(express_session_1.default({ secret: "won't tell because it's secret", saveUninitialized: true, resave: true }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(hpp_1.default()); // <- THIS IS THE NEW LINE
app.get(`${ApiBaseUrl}/`, (req, res, next) => {
    res.send("Welcome to Q-india");
    next();
});
app.listen(port, () => {
    console.log('running on port :' + port);
});
//# sourceMappingURL=index.js.map