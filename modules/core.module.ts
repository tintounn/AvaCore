import { Module } from '@nestjs/common';
import {UserController} from "./core_module/controllers/user.controller";

@Module({
    controllers: [UserController],
    modules: [],
})
export class CoreModule {}