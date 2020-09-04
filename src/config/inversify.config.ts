import 'reflect-metadata';
import { Container } from 'inversify';

import { IHttpClient } from 'interfaces/IHttpClient';
import { IUserService } from 'interfaces/IUserService';
import { IPostService } from 'interfaces/IPostService';
import { IUserPostService } from 'interfaces/IUserPostService';

import { UserService } from 'services/UserService';
import { HttpClient } from 'services/HttpClient';
import { PostService } from 'services/PostService';
import { UserPostService } from 'services/UserPostService';

import { TYPES } from 'type';

const container = new Container();
container.bind<IHttpClient>(TYPES.HttpClient).to(HttpClient);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<IPostService>(TYPES.PostService).to(PostService);
container.bind<IUserPostService>(TYPES.UserPostService).to(UserPostService);

export default container;
