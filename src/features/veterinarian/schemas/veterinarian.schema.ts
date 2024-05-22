import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VeterinarianDocument = Veterinarian & Document;

@Schema()
export class Veterinarian {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  clinic: string;

  @Prop({ required: true })
  contactInfo: string;

  @Prop({ required: true })
  specialization: string;

  @Prop({ default: [] })
  linkedPets: string[];
}

export const VeterinarianSchema = SchemaFactory.createForClass(Veterinarian);
