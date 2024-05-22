import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './schemas/pet.schema';

@Injectable()
export class PetService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async create(createPetDto: any): Promise<Pet> {
    const createdPet = new this.petModel(createPetDto);
    return createdPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(id: string): Promise<Pet> {
    return this.petModel.findById(id).exec();
  }

  async update(id: string, updatePetDto: any): Promise<Pet> {
    return this.petModel
      .findByIdAndUpdate(id, updatePetDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.petModel.findByIdAndDelete(id).exec();
  }
}
