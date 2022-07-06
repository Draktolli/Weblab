import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, ParseIntPipe, Query, UseGuards, Req
} from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse, ApiBody, ApiProduces, ApiConsumes
} from "@nestjs/swagger";
import { Header } from '@nestjs/common'
import { User } from './entities/user.entity';
import { AuthGuard } from "../auth/auth.guard";
import { ApiResponseModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export const carlistexResExample: string = `<?xml version="1.0"?> ...`

@ApiConsumes('application/xml')
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
@ApiOkResponse({content: {'application/xml': {}}})

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @ApiConsumes('application/xml', 'application/json')

  @ApiOperation({summary:"Create User"})
  @Post()
  @Header('Content-Type', 'application/xml')
  @ApiProduces("application/json", "application/xml", 'text/html', 'application/xhtml+xml', 'application/xml;q=0.9', '*/*;q=0.8')
  @ApiCreatedResponse({ type: User })
  @ApiBody({type:CreateUserDto})
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  async create(@Param()CreateUserDto, @Body() createUserDto: CreateUserDto):Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @ApiOperation({summary:"Get all users"})
  @Get(':all')
  @ApiOkResponse({ type: [User] })
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  async findAll(@Query('skip') skip: string, @Query('take') take: string): Promise<User[]> {
    return await this.usersService.findAll({skip: Number(skip), take: Number(take)});
  }


  @ApiOperation({summary:"Get user by id"})
  @Get(':id')
  @Header('Content-Type', 'application/xml')
  @ApiProduces("application/json", "application/xml", 'text/html', 'application/xhtml+xml', 'application/xml;q=0.9', '*/*;q=0.8')
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @ApiOkResponse({ type: User })
  @ApiOkResponse({content: {'application/xml': {example: carlistexResExample}}})
  async findOne(@Param('id', ParseIntPipe) id: string):Promise<User> {
    return await this.usersService.findOne(+id);
  }

  @ApiOperation({summary:"Update user"})
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  async update(@Param('id', ParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto):Promise<User>{
    return await this.usersService.update(+id, updateUserDto);
  }


  @ApiOperation({summary:"Delete user"})
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @ApiOkResponse({ type: User })
  async remove(@Param('id', ParseIntPipe) id: string):Promise<User> {
    return await this.usersService.remove(+id);
  }
  @ApiOperation({
    summary: 'Find user by supertokensID',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully returned.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('supertokensID::supertokensID')
  async findPlanCategory(
    @Param('supertokensID') supertokensID: string,
  ): Promise<User> {
    return await this.usersService.findUserBySupertokensID(supertokensID);
  }
}
