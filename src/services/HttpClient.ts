import 'reflect-metadata';
import { ApisauceInstance, create } from 'apisauce';
import { injectable } from 'inversify';

@injectable()
export class HttpClient {
  public request: ApisauceInstance;

  constructor() {
    this.request = create({ baseURL: process.env.REACT_APP_API_BASE });
  }
}
