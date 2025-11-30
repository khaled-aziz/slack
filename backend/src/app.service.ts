import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 1+'Hello git v2 from feature-hello branch !';
  }
  postHello(): string {
    return 'Hello git v2 from feature-hello branch !';
  }
  putHello(): string {
    return 'Hello git v2 from feature-hello branch !';
  }
}
