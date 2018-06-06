import { Document } from 'mongoose';
import { Schema } from 'mongoose';

export interface Photo extends Document {
  readonly _id: Schema.Types.ObjectId;
  readonly name: string;
  readonly description: string;
  readonly user: string;
  readonly mimetype: string;
}