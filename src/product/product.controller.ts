import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, ParseIntPipe, Query
} from "@nestjs/common";
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse, } from "@nestjs/swagger";
import {Product} from "./entities/product.entity";
import { Product as PrismaProduct } from "@prisma/client";


@ApiResponse({
  status: 200,
  description: "'success",
})
@ApiResponse({
  status: 501,
  description: "Not Implemented",
})
@ApiResponse({
  status: 404,
  description: 'User not found',
})
@ApiResponse({
  status: 400,
  description: 'Invalid ID',
})

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({summary:"Create Product"})
  @Post()
  @ApiCreatedResponse({ type: Product })
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  async create( @Body() createProductDto: CreateProductDto):Promise<PrismaProduct> {
    return await this.productService.create(createProductDto);
  }

  @ApiOperation({summary:"Get all Products"})
  @ApiOkResponse({ type: [Product] })
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @Get('all')
  async findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return await this.productService.findAll({skip: Number(skip), take: Number(take)});
  }

  @ApiOperation({summary:"Get Product by id"})
  @Get(':id')
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  async findOne(@Param('id', ParseIntPipe) id: number):Promise<PrismaProduct> {
    return await this.productService.findOne(id);
  }

  @ApiOperation({summary:"Update Product"})
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto):Promise<PrismaProduct> {
    return await this.productService.update(id, updateProductDto);
  }

  @ApiOperation({summary:"Delete Product"})
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number):Promise<PrismaProduct> {
    return await this.productService.remove(id);
  }
}
