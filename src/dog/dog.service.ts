import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Wow~ Wow';
  }

  public getIntroduce(): string {
    return 'My name is Rex!';
  }
}
