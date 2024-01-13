import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';

export interface BasePost {
  id?: number | string;
  type: PostType;
  title: string;
  author: string;
  createdAt: Date;
  publishedAt: Date;
  status: PostStatus;
  tags?: string[];
}

export interface VideoPost extends BasePost {
  videoUrl: string;
}

export interface TextPost extends BasePost {
  teaser: string;
  content: string;
}

export interface QuotePost extends BasePost {
  quote: string;
  cite: string;
}

export interface ImagePost extends BasePost {
  image: string;
}

export interface LinkPost extends BasePost {
  link: string;
  description?: string;
}
