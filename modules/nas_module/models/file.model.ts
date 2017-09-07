import {Column, DiscriminatorColumn, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance} from "typeorm";
import {} from "typeorm/decorator/entity/TableInheritance";
import {Folder} from "./folder.model";

@Entity()
@TableInheritance("class-table")
@DiscriminatorColumn({ name: "type", type: String})
export class File {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    size: number;

    @ManyToOne(type => Folder, folder => folder.files)
    folder: Folder;
}