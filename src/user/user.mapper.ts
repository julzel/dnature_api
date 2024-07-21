import { User as UserDocument } from './user.schema';
import { User as UserGraphQLType } from './entities/user.entity';

// Map Mongoose document to GraphQL type
export function toGraphQLUser(user: UserDocument): UserGraphQLType {
  return {
    id: user._id.toString(), // Map _id to id
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    phone: user.phone,
    password: user.password, // Not exposed in GraphQL
  };
}
