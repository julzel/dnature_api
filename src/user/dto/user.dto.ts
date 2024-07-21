// Defines the Data Transfer Objects (DTOs) for creating and updating users.

import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

// This class is used to define the structure and validation rules for
// the data required to create a new user. Each field is decorated with
// appropriate validation decorators like @IsNotEmpty, @IsEmail, and @IsString.
// Define the input type for creating a user
@InputType()
export class CreateUserDto {
  // First name of the user, required field
  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  // Last name of the user, required field
  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  // Email of the user, required field and must be a valid email
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // Address of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  // Phone number of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  // Password of the user, required field
  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}

// Define the input type for updating a user
@InputType()
export class UpdateUserDto {
  // First name of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  // Last name of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  // Email of the user, optional field and must be a valid email
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  // Address of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  // Phone number of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  // Password of the user, optional field
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  password?: string;
}
