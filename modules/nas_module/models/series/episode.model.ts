import {File} from "../file.model";
import {Entity} from "typeorm/decorator/entity/Entity";
import {Column, ManyToOne} from "typeorm";
import {Season} from "./season.model";

@Entity()
export class Episode extends File {

    @Column()
    duration: number;

    @ManyToOne(type => Season, season => season.episodes, {
        onDelete: 'CASCADE'
    })
    season: Season;
}