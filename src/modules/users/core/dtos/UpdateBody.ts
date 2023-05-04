import { IsEmail, IsString } from 'class-validator';

export class UpdateBody {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: number;
}
