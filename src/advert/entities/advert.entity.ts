import { CommonEntity } from "src/commun/commun.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('advert')
export class AdvertEntity extends CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string
    
    @ManyToOne(() => UserEntity, (user) => user.adverts, { nullable: true })
    user: UserEntity
}