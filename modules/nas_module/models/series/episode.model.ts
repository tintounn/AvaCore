import {File} from "../file.model";
import {ClassEntityChild} from "typeorm/decorator/entity/ClassEntityChild";
import {Season} from "./season.model";
import {ManyToOne, OneToMany} from "typeorm";

@ClassEntityChild()
export class Episode extends File {



}