import * as mongoose from 'mongoose';

export const PhotoSchema = new mongoose.Schema({
  name: String,
  description: String,
  user: String,
  mimetype: String,
});