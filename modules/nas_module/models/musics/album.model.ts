import {Column} from "typeorm";
import {Entity} from "typeorm/decorator/entity/Entity";
import {Folder} from "../folder.model";

@Entity()
export class Album extends Folder {

    @Column()
    years: number

}