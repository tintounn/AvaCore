import {Controller, Get, Post} from "@nestjs/common";
import {Request, Response} from "express";

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

    @Get("/:id")
    getUserInfo(req: Request, res: Response) {
        return res.status(200).json({ok: "ok"});
    }

}