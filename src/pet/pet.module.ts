import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import PetTokens from './pet.tokens';
import CreatePetUseCase from './usecases/create.pet.usecase';
import petRepository from './pet.repository';
import { Pet, PetSchema } from './schema/pet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import GetPetByIdUseCase from './usecases/get.pet.by.id.usecase';
import UpdatePetByIdUseCase from './usecases/update.pet.by.id.usecase';
import DeletePetByIdUseCase from './usecases/delete.pet.by.id.usecase';
import UpdatePetPhotoByIdUsecase from './usecases/update.pet.photo.by.id.usecase';
import AppTokens from 'src/app.tokens';
import FileService from 'src/file.service';
import GetPetsUseCase from './usecases/get.pets.usecase';

@Module({
  controllers: [PetController],

  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],

  providers: [
    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase,
    },
    {
      provide: PetTokens.getPetByIdUseCase,
      useClass: GetPetByIdUseCase,
    },
    {
      provide: PetTokens.petRepository,
      useClass: petRepository,
    },
    {
      provide: PetTokens.updatePetByIdUseCase,
      useClass: UpdatePetByIdUseCase,
    },
    {
      provide: PetTokens.deletePetByIdUseCase,
      useClass: DeletePetByIdUseCase,
    },
    {
      provide: PetTokens.updatePetPhotoByIdUsecase,
      useClass: UpdatePetPhotoByIdUsecase,
    },
    {
      provide: AppTokens.fileService,
      useClass: FileService,
    },
    {
      provide: PetTokens.getPetsUsecase,
      useClass: GetPetsUseCase,
    },
  ],
})
export class PetModule {}
