import "reflect-metadata";
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import bodyParser = require("body-parser");


const instance = express();
instance.use(bodyParser.urlencoded({extended: false}));
instance.use(bodyParser.json());
instance.use(express.static(path.join(__dirname, "public", "dist")));

const app = NestFactory.create(ApplicationModule, instance);
app.setGlobalPrefix("api");
app.listen(3000, () => console.log('Application is listening on port 3000.'));