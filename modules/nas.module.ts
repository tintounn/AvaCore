import { Module } from '@nestjs/common';
import {SerieController} from "./nas_module/controllers/serie.controller";

@Module({
    controllers: [SerieController],
    components: [],
    exports: [],
    modules: [],
})
export class NasModule {}