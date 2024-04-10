import { Pet } from '../schema/pet.schema';

export default interface IPetRepository {
  create(data: Partial<Pet>): Promise<Pet>;
  getById(id: string): Promise<Pet>;
}
