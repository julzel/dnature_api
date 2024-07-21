// Path: src/user/user.schema.ts
// Defines the Mongoose schema for the User entity.

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the Mongoose schema for the User entity
@Schema()
export class User extends Document {
  // First name of the user, required field
  @Prop({ required: true })
  firstName: string;

  // Last name of the user, required field
  @Prop({ required: true })
  lastName: string;

  // Email of the user, required field and must be unique
  @Prop({ required: true, unique: true })
  email: string;

  // Address of the user, optional field
  @Prop()
  address: string;

  // Phone number of the user, optional field
  @Prop()
  phone: string;

  // Password of the user, required field (to be used for JWT authorization later)
  @Prop({ required: true })
  password: string;
}

// Create a Mongoose schema based on the User class
export const UserSchema = SchemaFactory.createForClass(User);
