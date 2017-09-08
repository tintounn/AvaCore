import {Controller, Delete, Get, Post, Put} from "@nestjs/common";
import {Request, Response} from "express";
import {App} from "../../../app";
import {Serie} from "../models/series/serie.model";
import {Season} from "../models/series/season.model";

declare let ava: App;

@Controller("series")
export class SerieController {

    constructor() {}

    @Post("")
    create(req: Request, res: Response) {

    }

    @Put("/:id")
    update(req: Request, res: Response) {

    }

    @Get("/:id")
    findOne(req: Request, res: Response) {
        let serieRepository = ava.connection.getRepository(Serie);
        let seasonRepository = ava.connection.getRepository(Season);

        let serie1 = new Serie();
        serie1.path="";
        serie1.name="";
        serie1.size=0;
        serie1.date = "";
        serie1.summary="";
        serie1.seasons = new Array<Season>();

        let season1 = new Season();
        season1.path="";
        season1.name="";
        season1.size=0;
        season1.date="";
        season1.number=1;

        serieRepository.save(serie1).then((serie) => {
            serie.seasons.push(season1);
            serieRepository.save(serie);

            res.sendStatus(200);
        });
    }

    @Get("")
    find(req: Request, res: Response) {
        let serieRepository = ava.connection.getRepository(Serie);

        serieRepository.find().then((series) => {
            res.status(200).json({series: series});
        }).catch((err) => {
            res.status(500).json({err: err});
        })
    }

    @Delete("/:id")
    remove(req: Request, res: Response) {

    }
}