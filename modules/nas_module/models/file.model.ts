import {Column, DiscriminatorColumn, Entity, PrimaryGeneratedColumn, TableInheritance} from "typeorm";
import {} from "typeorm/decorator/entity/TableInheritance";

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
}