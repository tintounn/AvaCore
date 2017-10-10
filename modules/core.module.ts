import { Module } from '@nestjs/common';
import {UserController} from "./core_module/controllers/user.controller";
import {JwtService} from "./core_module/services/jwt.service";

@Module({
    controllers: [UserController],
    components: [JwtService],
    exports: [JwtService],
    modules: [],
})
export class CoreModule {}