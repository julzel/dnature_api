import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeterinarianService } from './veterinarian.service';
import { VeterinarianController } from './veterinarian.controller';
import {
  Veterinarian,
  VeterinarianSchema,
} from './schemas/veterinarian.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Veterinarian.name, schema: VeterinarianSchema },
    ]),
  ],
  providers: [VeterinarianService],
  controllers: [VeterinarianController],
})
export class VeterinarianModule {}
