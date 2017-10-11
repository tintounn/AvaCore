import {STRING, NUMBER} from "sequelize";

export class User {

    static get table(): string {
        return "user";
    }

    static get properties(): any {
        return {
            'username': {type: STRING},
            'password': {type: STRING},
            'image': {type: STRING}
        }
    }

    static get relations(): any {
        return [];
    }
}