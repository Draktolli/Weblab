import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { PrismaService } from "../prisma.service";
import { User as PrismaUser } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(public readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
  }): Promise<User[]> {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return await this.prismaService.user.findMany({
        take,
      });
    } else {
      return await this.prismaService.user.findMany({
        skip,
        take,
      });
    }
  }

  async findOne(id: number) :Promise<User>{
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    try {
      return this.prismaService.user.update({
        where: {
          id: id,
        },
        data: updateUserDto,
      })
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number):Promise<User> {
    try {
      return this.prismaService.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async findUserBySupertokensID(supertokensID: string) {
    const user = await this.prismaService.user.findFirst({
      where: { supertokensID },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
