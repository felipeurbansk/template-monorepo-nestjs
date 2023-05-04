import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class DeleteService {
  constructor(private readonly user: UserRepository) {}

  async handle(user_id: number): Promise<any> {
    return await this.user.delete(user_id);
  }
}
