import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class UpdateService {
  constructor(private readonly user: UserRepository) {}

  async handle(user_id: number, data: any): Promise<any> {
    return await this.user.update(user_id, data);
  }
}
