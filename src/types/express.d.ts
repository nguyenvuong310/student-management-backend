import 'express';

declare module 'express' {
  export interface User {
    id: string;
    email: string;
    // Thêm các trường khác nếu bạn cần
  }

  export interface Request {
    user?: User;
  }
}
