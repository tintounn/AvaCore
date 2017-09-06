import { Module } from '@nestjs/common';
import {CoreModule} from "./core.module";

@Module({
    modules: [CoreModule],
})
export class ApplicationModule {}