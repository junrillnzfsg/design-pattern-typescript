import container from 'config/inversify.config';
import { IUserPostService } from 'interfaces/IUserPostService';
import { TYPES } from 'type';

export const userPostService = container.get<IUserPostService>(
  TYPES.UserPostService,
);
