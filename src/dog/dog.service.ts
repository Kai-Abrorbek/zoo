import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Wow~ Wow';
  }

  public getIntroduce(): string {
    return 'My name is Rex!';
  }

  public modifyName(name: string): string {
    return `My name is ${name}`;
  }
}
