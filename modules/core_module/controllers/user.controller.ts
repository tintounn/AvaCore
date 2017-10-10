import {Controller, Get, Post, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {App} from "../../../app";
import {User} from "../models/user.model";
import {JwtService} from "../services/jwt.service";

declare let ava: App;

@Controller("users")
export class UserController {

    constructor(private jwtService: JwtService) {}

    @Post("/create")
    async create(@Req() req, @Res() res) {
        let userRepository = ava.connection.getRepository(User);
        let user = new User();
        user.username = req.body['username'];
        user.password = req.body['password'];
        user.image = "https://inayatmiah.files.wordpress.com/2015/01/fbpic.jpg";

        try {
            await userRepository.save(user);
            let token = this.jwtService.generateToken({id: user.id});

            res.status(200).json({token: token});
        } catch (error) {
            res.status(500).json({err: error});
        }
    }

    @Post("")
    async login(@Req() req, @Res() res) {
        let userRepository = ava.connection.getRepository(User);
        let username = req.body['username'];
        let password = req.body['password'];

        try {
            let user = await userRepository.findOne({username: username, password: password});
            if(!user) {
                res.sendStatus(401);
            } else {
                let token = this.jwtService.generateToken({id: user.id});
                res.status(200).json({token: token});
            }
        } catch (error) {
            res.status(500).json({err: error});
        }
    }

    @Get("/search/:username")
    async getUserInfo(@Req() req, @Res() res) {
        let userRepository = ava.connection.getRepository(User);
        let username = req.params['username'];

        try {
            let user = await userRepository.findOne({username: username}); 
            if (!user) {
                res.sendStatus(404);
            } else {
                delete user.password;
                res.status(200).json({user: user});
            }           
        } catch (error) {
            res.status(500).json({err: error});
        }
    }
}