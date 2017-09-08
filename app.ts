import "reflect-metadata";
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import * as nconf from 'nconf';
import bodyParser = require("body-parser");
import {INestApplication} from "@nestjs/common/interfaces/nest-application.interface";
import {User} from "./modules/core_module/models/user.model";
import {Connection, createConnection} from "typeorm";
import {File} from "./modules/nas_module/models/file.model";
import {Folder} from "./modules/nas_module/models/folder.model";
import {Album} from "./modules/nas_module/models/musics/album.model";
import {Movie} from "./modules/nas_module/models/movies/movie.model";
import {Serie} from "./modules/nas_module/models/series/serie.model";
import {Season} from "./modules/nas_module/models/series/season.model";
import {Episode} from "./modules/nas_module/models/series/episode.model";

export class App {
    private server: INestApplication;
    public connection: Connection;
    public env: string;
    public config: any;

    constructor() {
        this.initConfig().then(() => {
            return this.initDatabase();
        }).then(() => {
            return this.initNest();
        }).then(() => {
            return this.initServices();
        }).then(() => {
            return this.start();
        }).catch((err) => {
            console.error(err);
        });
    }

    private initConfig(): Promise<void> {
        this.env = "dev";
        nconf.argv();

        if(nconf.get('prod') || nconf.get('production')) this.env = 'prod';
        nconf.file(path.join(__dirname, 'config', this.env + '.json'));
        this.config = nconf;

        return Promise.resolve();
    }

    private initDatabase(): Promise<void> {
        return new Promise((resolve, reject) => {
            createConnection({
                type: this.config.get('orm:dialect'),
                host: this.config.get('orm:host'),
                port: this.config.get('orm:orm'),
                username: this.config.get('orm:user'),
                password: this.config.get('orm:password'),
                database: this.config.get('orm:database'),
                entities: [
                    User, File, Folder, Album, Movie, Serie, Season, Episode
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
        this.server.listen(this.config.get('http:port'), () => console.log('Application is listening on port ' + this.config.get('http:port')));
    }
}
global['ava'] = new App();



