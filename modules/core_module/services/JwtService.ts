import {Component} from "@nestjs/common";
import * as jwt from "jsonwebtoken";


@Component()
export class JwtService {

    private secret: string = "secret";

    generateToken(data: any): string {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: data
        }, this.secret);
    }

    verifyToken(token: string): boolean {
        try {
            jwt.verify(token, this.secret);
            return true;
        } catch(e) {
            return false;
        }
    }

    decodeToken(token: string): any {
        return jwt.decode(token);
    }
}