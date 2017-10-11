import "reflect-metadata";
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import * as nconf from 'nconf';
import * as bodyParser from 'body-parser';
import {INestApplication} from "@nestjs/common/interfaces/nest-application.interface";
import {User} from "./modules/core_module/models/user.model";
import {Connection, createConnection} from "typeorm";import {File} from "./modules/nas_module/models/file.model";
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
        this.start();
    }

    private async start() {
        try {
            await this.initConfig();
            await this.initDatabase();
            await this.initNest();
            await this.initServices();
            await this.initHttp();
        } catch (error) {
            console.error(error);
        }
    }

    private async initConfig(): Promise<void> {
        this.env = "dev";
        nconf.argv();

        if(nconf.get('prod') || nconf.get('production')) this.env = 'prod';
        nconf.file(path.join(__dirname, 'config', this.env + '.json'));
        this.config = nconf;
    }

    private async initDatabase() {
        let opts: any = {
            type: this.config.get('orm:dialect'),
            host: this.config.get('orm:host'),
            port: this.config.get('orm:orm'),
            username: this.config.get('orm:user'),
            password: this.config.get('orm:password'),
            database: this.config.get('orm:database'),
            entities: [
                User, File, Folder, Album, Movie, Serie, Season, Episode
            ],
            synchronize: true
        };

        this.connection = await createConnection(opts);
    }

    private async initNest(): Promise<void> {
        const instance = express();
        instance.use(bodyParser.urlencoded({extended: false}));
        instance.use(bodyParser.json());
        instance.use(express.static(path.join(__dirname, "public", "dist")));

        this.server = await NestFactory.create(ApplicationModule, instance);
        this.server.setGlobalPrefix("api");

    }

    private async initServices(): Promise<void> {
    }

    private async initHttp(): Promise<void> {
        this.server.listen(this.config.get('http:port'), () => console.log('Application is listening on port ' + this.config.get('http:port')));
    }
}
global['ava'] = new App();



