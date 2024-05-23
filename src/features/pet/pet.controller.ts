import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async create(@Body() createPetDto: any) {
    return this.petService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: any) {
    return this.petService.update(id, updatePetDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.petService.delete(id);
  }
}
