import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";
import {Column} from "typeorm";


@ClassEntityChild()
export class Album {

    @Column()
    years: number

}