import {Folder} from "../folder.model";
import {Column, OneToMany} from "typeorm";
import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";
import {Season} from "./season.model";

@ClassEntityChild()
export class Serie extends Folder {
    @Column()
    summary: string;

}