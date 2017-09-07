import {Column, DiscriminatorColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TableInheritance} from "typeorm/decorator/entity/TableInheritance";
import {File} from "./file.model";

@Entity()
@TableInheritance("class-table")
@DiscriminatorColumn({ name: "type", type: String})
export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    size: number;

    @OneToMany(type => File, file => file.folder)
    files: File[];

    @OneToMany(type => Folder, folder => folder.parent)
    folders: Folder[];

    @ManyToOne(type => Folder, folder => folder.folders)
    parent: Folder;
}