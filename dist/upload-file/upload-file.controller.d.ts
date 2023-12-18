import { UploadFileService } from './upload-file.service';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    create(createUploadFileDto: CreateUploadFileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUploadFileDto: UpdateUploadFileDto): string;
    remove(id: string): string;
}
