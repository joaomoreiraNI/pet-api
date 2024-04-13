import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class CreatePetControllerInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'nome do pet' })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'tipo do pet' })
  type: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'tamanho do pet' })
  size: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'gênero do pet' })
  gender: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  @ApiProperty({ description: 'descrição do pet' })
  bio: string;
}
