import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Creates a new user.
   * @param createUserDto - The data for creating a user.
   * @returns A promise that resolves to the created user.
   */
  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  /**
   * Retrieves all users.
   * @returns A promise that resolves to an array of users.
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   * Retrieves a user by ID.
   * @param id - The ID of the user to retrieve.
   * @returns A promise that resolves to the retrieved user.
   */
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  /**
   * Retrieves a user by email.
   * @param email - The email of the user to retrieve.
   * @returns A promise that resolves to the retrieved user.
   */
  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Updates a user by ID.
   * @param id - The ID of the user to update.
   * @param updateUserDto - The data for updating the user.
   * @returns A promise that resolves to the updated user.
   */
  async update(id: string, updateUserDto: any): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  /**
   * Deletes a user by ID.
   * @param id - The ID of the user to delete.
   * @returns A promise that resolves to the deletion result.
   */
  async delete(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
