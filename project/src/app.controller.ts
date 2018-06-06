import {
  Get,
  Controller,
  Post,
  Body,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Res,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from 'photos/photo.interface';
import { CreatePhotoDto } from 'photos/create-photo.dto';
import { MulterOptions } from '@nestjs/common/interfaces/external/multer-options.interface';

const options: MulterOptions = {
  limits: {
    fieldSize: 1024 * 1024 * 1024 * 1024 * 1024,
  },
};

@Controller('photo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return this.appService.findAll();
  }
  @Get(':id')
  async findById(@Res() res, @Param() params): Promise<any> {
    const photo = await this.appService.findById(params.id);
    const resp = await this.appService.getPhoto(photo);
    // SetTimeout because of problem returning stream. can't wait to stream for finish
    setTimeout(() => {
      res.sendFile(__dirname + `/downloads/${photo._id}.${photo.mimetype.split('/')[1]}`);
    }, 50);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Body() body: CreatePhotoDto): Promise<Photo>{
    const photo = await this.appService.create(body, file.mimetype);
    this.appService.upload(file, photo);
    return photo;
  }
}
