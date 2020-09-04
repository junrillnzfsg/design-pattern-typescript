import { User } from 'interfaces/IUserService';
import { Post } from 'interfaces/IPostService';

export interface UserWithPosts {
  user: User;
  posts: Post[];
}

export interface PostWithUser {
  user: User;
  post: Post;
}

export interface IUserPostService {
  getUserWithPosts(userId: number): Promise<UserWithPosts>;
  getPostWithUser(postId: number): Promise<PostWithUser>;
}
