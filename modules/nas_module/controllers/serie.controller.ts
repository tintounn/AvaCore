import {Controller, Delete, Get, Post, Put, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import * as fs from 'fs';

import {App} from "../../../app";
import {Serie} from "../models/series/serie.model";
import {Season} from "../models/series/season.model";


declare let ava: App;

@Controller("series")
export class SerieController {

    constructor() {}

    @Post("")
    async create(@Req() req, @Res() res) {
        let serieRepository = ava.connection.getRepository(Serie);
        let data = req.body;
        data.path = ava.config.get('nas:root') + "/" + data.name;

        try {
            let serie = await serieRepository.save(data);
            fs.mkdirSync(data.path);

            res.status(201).json(serie);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    @Put("/:id")
    update(@Req() req, @Res() res) {

    }

    @Get("/:id")
    findOne(@Req() req, @Res() res) {
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
    find(@Req() req, @Res() res) {
        let serieRepository = ava.connection.getRepository(Serie);

        serieRepository.find().then((series) => {
            res.status(200).json({series: series});
        }).catch((err) => {
            res.status(500).json({err: err});
        })
    }

    @Delete("/:id")
    remove(@Req() req, @Res() res) {

    }
}