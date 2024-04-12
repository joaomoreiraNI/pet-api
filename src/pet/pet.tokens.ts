import DeletePetByIdUseCase from './usecases/delete.pet.by.id.usecase';

export default class PetTokens {
  static createPetUseCase = 'createPetUseCase';

  static petRepository = 'petRepository';

  static getPetByIdUseCase = 'getPetByIdUseCase';

  static updatePetByIdUseCase = 'updatePetByIdUseCase';

  static deletePetByIdUseCase = 'deletePetByIdUseCase';

  static updatePetPhotoByIdUsecase = 'updatePetPhotoByIdUsecase';
}
