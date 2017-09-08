import {Folder} from "../folder.model";
import {Column, ManyToOne, OneToMany} from "typeorm";
import {Entity} from "typeorm/decorator/entity/Entity";
import {Serie} from "./serie.model";
import {Episode} from "./episode.model";

@Entity()
export class Season extends Folder {

    @Column()
    number: number;

    @Column()
    date: string;

    @ManyToOne(type => Serie, serie => serie.seasons, {
        onDelete: 'CASCADE'
    })
    serie: Serie;

    @OneToMany(type => Episode, episode => episode.season, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    episodes: Episode[];

}