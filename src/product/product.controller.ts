import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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
import { User } from "../user/entities/user.entity";

@ApiBearerAuth()
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
  create(@Param('name')name: string, @Param('price')number: string, @Param('Type')type: string, @Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
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
  findAll() {
    return this.productService.findAll();
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
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOperation({summary:"Update Product"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}