import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class CreateService {
  constructor(private readonly user: UserRepository) {}

  async handle(data: any): Promise<any> {
    return await this.user.create(data);
  }
}
