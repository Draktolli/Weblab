import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as xmlParser from "fast-xml-parser";

export const XML = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const { body } = ctx.switchToHttp().getRequest();
  if (xmlParser.validate(body) !== true) {
    return 'xml invalid';
  }
  const { xml } = xmlParser.parse(body);
  return xml;
});
