import {Folder} from "../folder.model";
import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";
import {Column, ManyToOne, OneToMany} from "typeorm";
import {Episode} from "./episode.model";
import {Serie} from "./serie.model";

@ClassEntityChild()
export class Season extends Folder {

    @Column()
    number: number;

}