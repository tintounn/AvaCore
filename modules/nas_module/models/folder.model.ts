import {Column, DiscriminatorColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TableInheritance} from "typeorm/decorator/entity/TableInheritance";

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
}