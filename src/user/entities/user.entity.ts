
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AdvertEntity } from "../../advert/entities/advert.entity";
import { CommonEntity } from "../../commun/commun.entity";

@Entity('user')
export class UserEntity extends CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    name: string

    @OneToMany(() => AdvertEntity, (advert) => advert.user)
    adverts: AdvertEntity[]
}
