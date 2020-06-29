import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('shirts')
export class ShirtsController {

  @Get()
  @HttpCode(200)
  find(@Req() req: Request, @Res() res: Response) : string {
    return "Hello Shirt";
  }

}
