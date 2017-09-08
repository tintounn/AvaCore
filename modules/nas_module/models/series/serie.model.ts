import {Folder} from "../folder.model";
import {Column, OneToMany} from "typeorm";
import {Entity} from "typeorm/decorator/entity/Entity";
import {Season} from "./season.model";

@Entity()
export class Serie extends Folder {

    @Column()
    summary: string;

    @Column()
    date: string;

    @OneToMany(type => Season, season => season.serie, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    seasons: Season[];

}