// Path: src/user/user.module.ts
// Defines the User module, importing necessary components and providing the service and resolver.

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    // Import the MongooseModule and define the User schema
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    // Provide the User service and resolver
    UserService,
    UserResolver,
  ],
  exports: [
    // Export the User service in case it needs to be used in other modules
    UserService,
  ],
})
export class UserModule {}
