import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse, ApiBody
} from "@nestjs/swagger";
import { User } from './entities/user.entity';

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

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiOperation({summary:"Create User"})
  @Post()
  @ApiCreatedResponse({ type: User })
  @ApiBody({type:CreateUserDto})
  @ApiResponse({
    status: 200,
    description: "'success",
  })
  create(@Body() createUserDto: CreateUserDto) { //:User
    return this.usersService.create(createUserDto);
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
  findAll() {
    return this.usersService.findAll();
  }


  @ApiOperation({summary:"Get user by id"})
  @Get(':id')
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID',
  })
  @ApiOkResponse({ type: User })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({summary:"Update user"})
  @Patch(':id')
  @ApiCreatedResponse({ type: User })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }


  @ApiOperation({summary:"Delete user"})
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
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
