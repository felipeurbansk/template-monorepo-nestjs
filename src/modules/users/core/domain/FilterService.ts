import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class FilterService {
  constructor(private readonly user: UserRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.user.getAll(filter);
  }
}
