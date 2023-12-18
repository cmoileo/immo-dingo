import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        savedUser: CreateUserDto & import("./entities/user.entity").UserEntity;
    }>;
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
