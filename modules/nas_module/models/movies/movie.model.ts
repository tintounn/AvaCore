import {Column} from "typeorm";
import {File} from "../file.model";
import {Entity} from "typeorm/decorator/entity/Entity";

@Entity()
export class Movie extends File {

    @Column()
    duration: number;

    @Column()
    summary: string;
}