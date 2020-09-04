import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IHttpClient } from 'interfaces/IHttpClient';
import { IPostService, Post } from 'interfaces/IPostService';
import { TYPES } from 'type';

@injectable()
export class PostService implements IPostService {
  @inject(TYPES.HttpClient) private _httpClient: IHttpClient;

  async getPost(postId: number): Promise<Post> {
    return await this._httpClient.request
      .get(`/posts/${postId}`)
      .then(({ data }) => data as Post);
  }

  async getPostsFromUserId(userId: number): Promise<Post[]> {
    return await this._httpClient.request
      .get(`/posts`, { userId })
      .then(({ data }) => data as Post[]);
  }
}
