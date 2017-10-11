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
        data.size = 0;

        try {
            let serie = await serieRepository.save(data);
            fs.mkdirSync(data.path);

            res.status(201).json({serie: serie});
        } catch (error) {
            res.status(500).json({err: error});
        }
        
    }

    @Put("/:id")
    update(@Req() req, @Res() res) {

    }

    @Get("/:id")
    async findOne(@Req() req, @Res() res) {
        let serieRepository = ava.connection.getRepository(Serie);
        let id = req.params['id'];

        try {
            let serie = await serieRepository.findOneById(id, {relations: ['seasons']});
            
            res.status(200).json({serie: serie});
        } catch (error) {
            console.log(error);
            res.status(500).json({err: error});
        }
    }

    @Get("")
    async find(@Req() req, @Res() res) {
        let serieRepository = ava.connection.getRepository(Serie);
        let seasonRepository = ava.connection.getRepository(Season);
        let searchValue = req.query['name'];

        try {
            let seriesQuery = serieRepository.createQueryBuilder("serie")
                                              .innerJoinAndSelect("serie.seasons", "season");
            if(searchValue) {
                seriesQuery = seriesQuery.where("serie.name LIKE '%:name%'", {name: searchValue});
            }

            let series = await seriesQuery.getMany();
            for(let index in series) {
                series[index].seasons = await seasonRepository.find({select: ['id']});
            }
            
            res.status(200).json({series: series});
        } catch (error) {
            console.log(error);
            res.status(500).json({err: error});
        }
    }

    @Delete("/:id")
    remove(@Req() req, @Res() res) {

    }
}