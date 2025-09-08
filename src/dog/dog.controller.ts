import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import express from 'express';
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public getIntroduce(@Param() params: string, @Query() query: string): string {
    console.log('params: ', params);
    console.log('params: ', query);
    return this.dogService.getIntroduce();
  }
}
