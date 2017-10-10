import {Component} from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import {App} from "../../../app";

declare let ava: App;

@Component()
export class JwtService {

    generateToken(data: any): string {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: data
        }, ava.config.get('secret'));
    }

    verifyToken(token: string): boolean {
        try {
            jwt.verify(token, ava.config.get('secret'));
            return true;
        } catch(e) {
            return false;
        }
    }

    decodeToken(token: string): any {
        return jwt.decode(token);
    }
}