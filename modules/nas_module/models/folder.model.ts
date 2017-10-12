import {Column, DiscriminatorColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import * as archiver from 'archiver';

import {DownloadableInterface} from '../class/downloadable.interface';

export class Folder implements DownloadableInterface {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    path: string;

    @Column()
    size: number;

    download(out: any) {
        let archive = archiver('zip');

        archive.on('error', (err) => {
            console.log(err);
        });

        archive.pipe(out);
        archive.directory(this.path, this.name);
        archive.finalize();
    }
}