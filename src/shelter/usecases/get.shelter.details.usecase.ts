import { IUseCase } from 'src/domain/iusecase.interface';
import GetShelterDetailsUseCaseOutput from './dtos/get.shelter.details.usecase.output';

export default class GetShelterDetailsUseCase
  implements IUseCase<null, GetShelterDetailsUseCaseOutput>
{
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    return Promise.resolve(
      new GetShelterDetailsUseCaseOutput({
        shelterName: 'Anjos de Focinho',
        shelterEmail: 'anjosdefc@gmail.com',
        shelterPhone: '19982384830',
        shelterWhatsApp: '199818183520',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    );
  }
}
