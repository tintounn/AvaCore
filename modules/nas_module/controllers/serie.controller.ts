import {Controller, Delete, Get, Post, Put} from "@nestjs/common";
import {Request, Response} from "express";
import {App} from "../../../app";
import {Serie} from "../models/series/serie.model";

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
        let id = req.params['id'];

        let seriesPromise = serieRepository.createQueryBuilder("serie")
            .leftJoinAndSelect("folder.folders", "season")
            .where("id", id)
            .getOne();
        seriesPromise.then((serie) => {
            res.status(200).json({serie: serie});
        }).catch((err) => {
           res.status(500).json({err: err});
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