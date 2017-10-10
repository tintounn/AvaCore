import { Middleware, NestMiddleware } from '@nestjs/common';
import {Request, Response} from "express";
import {JwtService} from "../services/jwt.service";


@Middleware()
export class JwtIsValid implements NestMiddleware {

    constructor(private jwtService: JwtService) {}

    resolve(): (req: Request, res: Response, next: any) => void {
        return (req: Request, res: Response, next: any) => {
            let token = req.header('Authorization');

            if(!token) {
                res.sendStatus(401);
            } else {
                let isValid = this.jwtService.verifyToken(token);
                if(!isValid) {
                    res.sendStatus(401);
                } else {
                    let data = this.jwtService.decodeToken(token);
                    req.params['jwt'] = {
                      'token': token,
                      'data': data
                    };

                    next();
                }
            }

        }
    }
}