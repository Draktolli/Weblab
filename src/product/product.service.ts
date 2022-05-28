import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from "../prisma.service";
import { Product as PrismaProduct } from "@prisma/client";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(public readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<PrismaProduct> {

    return this.prismaService.product.create({
      data: {Name:createProductDto.name, Price:createProductDto.price, Type:createProductDto.type  },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
  }): Promise<PrismaProduct[]> {
    const { skip, take } = params;
    if (isNaN(skip)) {
      return await this.prismaService.product.findMany({
        take,
      });
    } else {
      return await this.prismaService.product.findMany({
        skip,
        take,
      });
    }
  }

  async findOne(id: number) :Promise<PrismaProduct>{
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<PrismaProduct> {
    try {
      return this.prismaService.product.update({
        where: {
          id: id,
        },
        data: {Name:updateProductDto.name, Price:updateProductDto.price, Type:updateProductDto.type },
      })
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number):Promise<PrismaProduct> {
    try {
      return this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}