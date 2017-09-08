import {Column, DiscriminatorColumn, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance} from "typeorm";
import {} from "typeorm/decorator/entity/TableInheritance";
import {Folder} from "./folder.model";

export class File {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    path: string;

    @Column()
    size: number;

    @Column()
    mime: string;
}