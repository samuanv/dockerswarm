import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Photo } from 'photos/photo.interface';
import { CreatePhotoDto } from 'photos/create-photo.dto';

import * as SwiftClient from 'openstack-swift-client';
import * as stream from 'stream';
import * as fs from 'fs';
import axios from 'axios';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('Photo') private readonly photoModel: Model<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto, mimetype: string): Promise<Photo> {
    const createdPhoto = new this.photoModel(createPhotoDto);
    createdPhoto.mimetype = mimetype;
    return await createdPhoto.save();
  }
  async findById(id): Promise<Photo> {
    return await this.photoModel.findById(id).exec();
  }
  async findAll(): Promise<Photo[]> {
    return await this.photoModel.find().exec();
  }
  async upload(file, photo) {
    const client = new SwiftClient(
      'http://localhost:8083/auth/v1.0',
      'test:tester',
      'testing',
    );

    // Create container in swift if doesn't exists
    await client.create('photos', true);
    const container = client.container('photos');

    // Make stream from file
    const bufferStream = new stream.PassThrough();
    bufferStream.end(new Buffer(file.buffer));
    const {buffer, ...file2} = file;
    const mimetype = photo.mimetype.split('/')[1];

    const response = await container.create(
      `${photo._id}.${mimetype}`,
      bufferStream,
      file2,
    );
  }
  async getPhoto(photo: Photo) {
    const client = new SwiftClient(
      'http://localhost:8083/auth/v1.0',
      'test:tester',
      'testing',
    );
    const container = client.container('photos');

    const mimetype = photo.mimetype.split('/')[1];

    const stream = fs.createWriteStream(
      __dirname + `/downloads/${photo._id}.${mimetype}`,
    );
    const response = await container.get(`${photo._id}.${mimetype}`, stream);
    stream.end();
    stream.on('end', () => {
      return true;
    });
  }
}