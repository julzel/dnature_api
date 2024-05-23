import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Veterinarian,
  VeterinarianDocument,
} from './schemas/veterinarian.schema';

@Injectable()
export class VeterinarianService {
  constructor(
    @InjectModel(Veterinarian.name)
    private veterinarianModel: Model<VeterinarianDocument>,
  ) {}

  async create(createVeterinarianDto: any): Promise<Veterinarian> {
    const createdVeterinarian = new this.veterinarianModel(
      createVeterinarianDto,
    );
    return createdVeterinarian.save();
  }

  async findAll(): Promise<Veterinarian[]> {
    return this.veterinarianModel.find().exec();
  }

  async findOne(id: string): Promise<Veterinarian> {
    return this.veterinarianModel.findById(id).exec();
  }

  async update(id: string, updateVeterinarianDto: any): Promise<Veterinarian> {
    return this.veterinarianModel
      .findByIdAndUpdate(id, updateVeterinarianDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.veterinarianModel.findByIdAndDelete(id).exec();
  }
}
