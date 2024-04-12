import PetResponse from 'src/pet/dtos/pet.response';

export default class GetPetsUseCaseOutput {
  currentPage: number;
  totalPages: number;
  items: PetResponse[];

  constructor(data: Partial<PetResponse>) {
    Object.assign(this, data);
  }
}
