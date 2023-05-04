import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
