import { User } from './user.interface';

export interface Comment {
  id: number;
  postId: number;
  text: string;
  author: User;
  createdAt: Date;
}
