import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class User {
  @ApiProperty()
  id:number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email:string;
  @ApiProperty()
  supertokensID: string;
}
