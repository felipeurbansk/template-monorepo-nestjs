import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class GetByIdService {
  constructor(private readonly user: UserRepository) {}

  async handle(user_id: number): Promise<any> {
    return await this.user.getById(user_id);
  }
}
