import "reflect-metadata";
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import bodyParser = require("body-parser");
import {INestApplication} from "@nestjs/common/interfaces/nest-application.interface";
import {User} from "./modules/core_module/models/user.model";
import {Connection, createConnection} from "typeorm";

export class App {
    private server: INestApplication;
    public connection: Connection;

    constructor() {
        this.initDatabase().then(() => {
            return this.initNest();
        }).then(() => {
            return this.initServices();
        }).then(() => {
            return this.start();
        }).catch((err) => {
           console.error(err);
        });
    }

    private initDatabase(): Promise<void> {
        return new Promise((resolve, reject) => {
            createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "ava",
                entities: [
                    User
                ],
                autoSchemaSync: true,
            }).then(connection => {
                this.connection = connection;
                resolve();
            }).catch(reject);
        });
    }

    private initNest(): Promise<void> {
        const instance = express();
        instance.use(bodyParser.urlencoded({extended: false}));
        instance.use(bodyParser.json());
        instance.use(express.static(path.join(__dirname, "public", "dist")));
        
        this.server = NestFactory.create(ApplicationModule, instance);
        this.server.setGlobalPrefix("api");

        return Promise.resolve();
    }

    private initServices(): Promise<void> {
        return Promise.resolve();
    }

    private start() {
        this.server.listen(3000, () => console.log('Application is listening on port 3000.'));
    }
}
global['ava'] = new App();



