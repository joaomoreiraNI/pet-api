export default class GetShelterDetailsUseCaseOutput {
  name: string;
  whatsApp: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
    Object.assign(this, data);
  }
}
