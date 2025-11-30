import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 11+11+'Hello git v2 from feature-hello branch !';
  }
  postHello(): string {
    return 'Hello git v2 from feature-hello branch !';
  }
}
