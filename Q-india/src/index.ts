
import express from 'express';
import bodyParser from "body-parser";
import  morgan   from 'morgan';
import cookieParser    from 'cookie-Parser';
import  session    from 'express-session';
import  cors    from 'cors';
import  dotenv    from 'dotenv';
import compression    from 'compression';
import db from './config/DatabaseConnection';
import hpp from  'hpp';
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

dotenv.config();

const app = express();

console.log(process.env.ApiBaseUrl);
var port = process.env.Port;
var ApiBaseUrl=process.env.ApiBaseUrl;
console.log(port);

app.use(morgan("combined"));
app.use(cors());
app.use(compression())

app.use(cookieParser());
app.use(session({ secret: "won't tell because it's secret",saveUninitialized:true,resave:true  }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(hpp()); // <- THIS IS THE NEW LINE







app.get(`${ApiBaseUrl}/`, (req, res, next) => {

res.send("Welcome to Q-india");
next();
});
app.listen(port, () => {
    console.log('running on port :' + port);
    });
    
