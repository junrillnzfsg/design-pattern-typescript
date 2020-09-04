import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IPostService } from 'interfaces/IPostService';
import { IUserService } from 'interfaces/IUserService';
import {
  IUserPostService,
  PostWithUser,
  UserWithPosts,
} from 'interfaces/IUserPostService';
import { TYPES } from 'type';

@injectable()
export class UserPostService implements IUserPostService {
  @inject(TYPES.PostService) private _postService: IPostService;
  @inject(TYPES.UserService) private _userService: IUserService;

  async getUserWithPosts(userId: number): Promise<UserWithPosts> {
    const postWithUser = this._postService.getPostsFromUserId(userId);
    const getUser = this._userService.getUser(userId);
    return Promise.all([getUser, postWithUser]).then(([user, posts]) => ({
      user,
      posts,
    }));
  }

  async getPostWithUser(postId: number): Promise<PostWithUser> {
    const post = await this._postService.getPost(postId);
    const user = await this._userService.getUser(post.userId);
    return Promise.resolve({
      post,
      user,
    });
  }
}
