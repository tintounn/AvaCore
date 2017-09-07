import {Column} from "typeorm";
import {File} from "../file.model";
import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";

@ClassEntityChild()
export class Movie extends File {

    @Column()
    duration: number;

    @Column()
    summary: string;
}