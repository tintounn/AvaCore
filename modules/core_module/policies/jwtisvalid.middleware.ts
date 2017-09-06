
import { Middleware, NestMiddleware } from '@nestjs/common';
import {Request, Response} from "express";

@Middleware()
export class JwtIsValid implements NestMiddleware {
    resolve(): (req: Request, res: Response, next: any) => void {
        return (req: Request, res: Response, next: any) => {

        }
    }
}