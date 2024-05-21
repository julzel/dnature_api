import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeterinariansService } from './veterinarian.service';
import { VeterinariansController } from './veterinarian.controller';
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
  providers: [VeterinariansService],
  controllers: [VeterinariansController],
})
export class VeterinariansModule {}
