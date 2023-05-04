import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/UserController';
import { Service } from './core/domain/Service';
import { CreateService } from './core/domain/CreateService';
import { DeleteService } from './core/domain/DeleteService';
import { FilterService } from './core/domain/FilterService';
import { GetByIdService } from './core/domain/GetByIdService';
import { UpdateService } from './core/domain/UpdateService';
import { UserRepository } from './core/repositories/UserRepository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaRepository,
    },
    CreateService,
    DeleteService,
    FilterService,
    GetByIdService,
    UpdateService,
    Service,
    PrismaService,
  ],
})
export class UserModule {}
