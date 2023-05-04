import { IsString } from 'class-validator';

export class FilterBody {
  @IsString()
  name: string;

  @IsString()
  email: string;
}
