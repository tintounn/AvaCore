import {Column, DiscriminatorColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    path: string;

    @Column()
    size: number;
}