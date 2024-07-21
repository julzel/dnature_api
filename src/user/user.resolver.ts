// path: src/user/user.resolver.ts
// Handles GraphQL queries and mutations for the User entity.

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput, UpdateUserInput } from './inputs/user.input';
import { UserService } from './user.service';
import { toGraphQLUser } from './user.mapper';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Query to get all users
  @Query(() => [User], { name: 'getAllUsers' })
  async getAllUsers(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users.map(toGraphQLUser);
  }

  // Query to get a user by ID
  @Query(() => User, { name: 'getUserById' })
  async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User> {
    const user = await this.userService.findById(id);
    return toGraphQLUser(user);
  }

  // Mutation to create a new user
  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const newUser = await this.userService.create(createUserInput);
    return toGraphQLUser(newUser);
  }

  // Mutation to update an existing user
  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const updatedUser = await this.userService.update(id, updateUserInput);
    return toGraphQLUser(updatedUser);
  }

  // Mutation to delete a user by ID
  @Mutation(() => User)
  async deleteUser(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User> {
    const deletedUser = await this.userService.delete(id);
    return toGraphQLUser(deletedUser);
  }
}
