import { CreateBody } from '../../core/dtos/CreateBody';
import { UpdateBody } from '../../core/dtos/UpdateBody';
import { FilterBody } from '../../core/dtos/FilterBody';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Service } from '../../core/domain/Service';

@Controller('users')
export class UserController {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() data: CreateBody) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new users.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: FilterBody) {
    return await this.service
      .get(filter)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all users.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get(':user_id')
  async getById(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.service
      .getById(user_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `User with id ${user_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all users.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Put(':user_id')
  async update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() data: UpdateBody,
  ) {
    return await this.service
      .update(user_id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating user with id ${user_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Delete(':user_id')
  async delete(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.service
      .delete(user_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete user with id ${user_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
