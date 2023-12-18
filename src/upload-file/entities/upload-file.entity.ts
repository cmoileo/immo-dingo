
import { Entity } from "typeorm";
import { CommonEntity } from "../../commun/commun.entity";

@Entity('file')
export class UploadFileEntity extends CommonEntity {
    id: number
}
