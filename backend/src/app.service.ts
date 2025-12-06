import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 1+'Hello git v1.2.0 from feature-tst-pr branch !';
  }
  postHello(): string {
    return 'Hello from feature-tst-pr branch !';
  }
  // putHello(): string {
  //   return 'Hello from feature-tst-pr branch !';
  // }
  deleteHello(): string {
    return 'Hello git v1.2.0 from feature-tst-pr branch !';
  }
}
