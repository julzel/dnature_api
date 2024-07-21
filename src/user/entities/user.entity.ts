// Defines the GraphQL object type for the User entity, specifying the fields exposed through the GraphQL API.

import { Field, ObjectType, ID } from '@nestjs/graphql';

// Define the GraphQL object type for the User entity
@ObjectType()
export class User {
  // Unique identifier for the user
  @Field(() => ID)
  id: string;

  // First name of the user
  @Field()
  firstName: string;

  // Last name of the user
  @Field()
  lastName: string;

  // Email of the user
  @Field()
  email: string;

  // Address of the user, optional field
  @Field({ nullable: true })
  address?: string;

  // Phone number of the user, optional field
  @Field({ nullable: true })
  phone?: string;

  // Password of the user, this field is not exposed in GraphQL for security reasons
  // Do not add a @Field decorator here to prevent it from being exposed
  password: string;
}
