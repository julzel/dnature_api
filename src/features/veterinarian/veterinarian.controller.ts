import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { VeterinarianService } from './veterinarian.service';

@Controller('veterinarian')
export class VeterinarianController {
  constructor(private readonly veterinarianService: VeterinarianService) {}

  @Post()
  async create(@Body() createVeterinarianDto: any) {
    return this.veterinarianService.create(createVeterinarianDto);
  }

  @Get()
  async findAll() {
    return this.veterinarianService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.veterinarianService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVeterinarianDto: any) {
    return this.veterinarianService.update(id, updateVeterinarianDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.veterinarianService.delete(id);
  }
}
