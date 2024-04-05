import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ShelterModule,
    MongooseModule.forRoot(
      'mongodb+srv://victorrjoao:hgdasdhvwqdiJ17$@pet-api-cluster.cx6jwfn.mongodb.net/pet-db?retryWrites=true&w=majority&appName=pet-api-cluster',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
