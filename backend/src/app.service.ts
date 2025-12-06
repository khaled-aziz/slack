import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 1+'Hello git v1.2.0 from feature-hello branch !';
  }
  postHello(): string {
    return 'Hello from feature-hello branch !';
  }
  // putHello(): string {
  //   return 'Hello from feature-hello branch !';
  // }
  deleteHello(): string {
    return 'Hello git v1.2.0 from feature-hello branch !';
  }
}
