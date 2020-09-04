import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IUserService, User } from 'interfaces/IUserService';
import { IHttpClient } from 'interfaces/IHttpClient';
import { TYPES } from 'type';

@injectable()
export class UserService implements IUserService {
  @inject(TYPES.HttpClient) private _httpClient: IHttpClient;

  async getUser(userId: number): Promise<User> {
    return await this._httpClient.request
      .get(`/users/${userId}`)
      .then(({ data }) => data as User);
  }
}
