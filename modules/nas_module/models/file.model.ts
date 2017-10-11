import {STRING, NUMBER} from 'sequelize';
import * as fs from 'fs';

import {Folder} from "./folder.model";
import {DownloadableInterface} from '../class/downloadable.interface';

export class File {

    static get properties(): any {
        return {
            name: {type: STRING},
            path: {type: STRING},
            size: {type: NUMBER},
            mime: {type: STRING}
        }
    }
}