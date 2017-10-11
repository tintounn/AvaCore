import {Column, DiscriminatorColumn, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance} from "typeorm";
import * as fs from 'fs';

import {Folder} from "./folder.model";
import {DownloadableInterface} from '../class/downloadable.interface';

export class File implements DownloadableInterface {

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

    download(out: any) {
        let readStream = fs.createReadStream(this.path);
        readStream.pipe(out);
    }
}