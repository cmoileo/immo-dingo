
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "../../commun/commun.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity('advert')
export class AdvertEntity extends CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    price: number

    @Column()
    nb_rooms: number

    @Column()
    square_meters: number

    @Column()
    phoneNumber: string

    @Column()
    description: string
    
    @ManyToOne(() => UserEntity, (user) => user.adverts, { nullable: true })
    user: UserEntity
}