import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';

export default class UpdateShelterControllerInput {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @Length(10, 11)
  whatsApp: string;
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
