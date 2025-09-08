import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'Hello I am Cat~!';
  }

  public getIntroduce(): string {
    return 'My name is Tom!';
  }
}
