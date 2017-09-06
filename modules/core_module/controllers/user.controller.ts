import {Controller, Get, Post} from "@nestjs/common";
import {Request, Response} from "express";
import {App} from "../../../app";

declare let app: App;

@Controller("users")
export class UserController {

    @Post("")
    create(req: Request, res: Response) {
        return res.status(200).json({ok: "ok"});
    }

    @Post("/create")
    login(req: Request, res: Response) {
        return res.status(200).json({ok: "ok"});
    }

    @Get("/search/:username")
    getUserInfo(req: Request, res: Response) {
        return res.status(200).json({ok: "ok"});
    }

}