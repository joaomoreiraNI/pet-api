import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsPhoneNumber,
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
  whatsapp: string;
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
