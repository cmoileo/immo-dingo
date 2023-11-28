import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('user')
export class CommonEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
    @DeleteDateColumn({nullable: true})
    deletedAt: Date
}