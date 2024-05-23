import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './features/user/user.module';
import { PetModule } from './features/pet/pet.module';
import { VeterinarianModule } from './features/veterinarian/veterinarian.module';
import { AuthModule } from './features/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UserModule,
    PetModule,
    VeterinarianModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
