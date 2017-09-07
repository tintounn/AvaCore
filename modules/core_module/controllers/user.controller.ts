import {Controller, Get, Post} from "@nestjs/common";
import {Request, Response} from "express";
import {App} from "../../../app";
import {User} from "../models/user.model";
import {JwtService} from "../services/JwtService";

declare let ava: App;

@Controller("users")
export class UserController {

    constructor(private jwtService: JwtService) {}

    @Post("/create")
    create(req: Request, res: Response) {
        let userRepository = ava.connection.getRepository(User);
        let user = new User();
        user.username = req.body['username'];
        user.password = req.body['password'];
        user.image = "https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg";

        userRepository.save(user).then((user) => {
            let token = this.jwtService.generateToken({id: user.id});
            res.status(200).json({token: token});
        }).catch((err) => {
            res.status(500).json({err: err});
        });
    }

    @Post("")
    login(req: Request, res: Response) {
        let userRepository = ava.connection.getRepository(User);
        let username = req.body['username'];
        let password = req.body['password'];

        userRepository.findOne({username: username, password: password}).then((user) => {
            if (!user) {
                res.sendStatus(401);
            } else {
                let token = this.jwtService.generateToken({id: user.id});
                res.status(200).json({token: token});
            }
        }).catch((err) => {
            res.status(500).json({err: err});
        });
    }

    @Get("/search/:username")
    getUserInfo(req: Request, res: Response) {
        let userRepository = ava.connection.getRepository(User);
        let username = req.params['username'];

        userRepository.findOne({username: username}).then((user) => {
            if (!user) {
                res.status(200).json({user: {}});
            } else {
                delete user.password;
                res.status(200).json({user: user});
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({err: err});
        });
    }
}