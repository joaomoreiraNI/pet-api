import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Bigo',
            shelterEmail: 'abb@gmail.com',
            shelterPhone: '19981281830',
            shelterWhatsApp: '199818182819',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}