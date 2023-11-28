import { CommonEntity } from "src/commun/commun.entity";
import { Entity } from "typeorm";

@Entity('file')
export class UploadFileEntity extends CommonEntity {
    id: number
}
