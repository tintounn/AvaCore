import {Folder} from "../folder.model";
import {Column} from "typeorm";
import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";

@ClassEntityChild()
export class Serie extends Folder {

    @Column()
    summary: string;

}