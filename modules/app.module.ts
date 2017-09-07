import { Module } from '@nestjs/common';
import {CoreModule} from "./core.module";
import {NasModule} from "./nas.module";

@Module({
    modules: [CoreModule, NasModule],
})
export class ApplicationModule {}