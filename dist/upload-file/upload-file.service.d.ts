import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
export declare class UploadFileService {
    create(createUploadFileDto: CreateUploadFileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUploadFileDto: UpdateUploadFileDto): string;
    remove(id: number): string;
}
