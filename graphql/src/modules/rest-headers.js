import { RESTDataSource } from 'apollo-datasource-rest';

export default class RESTHeaders extends RESTDataSource {
  willSendRequest(req) {
    Object.entries(this.context.headers)
      .forEach(([key, value]) => req.headers.set(key, value));
  }
}
