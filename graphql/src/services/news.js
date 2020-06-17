import RESTDataSource from '~/modules/rest-headers';

export default class MercureAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.NEWS;
    this.apiKey = process.env.MAGAZINE_API_KEY;
  }

  willSendRequest(req) {
    req.headers.set('X-Api-Key', this.apiKey);
  }

  getSources() {
    console.log('process.env.NEWS', this.baseURL);
    return this.get(`${this.baseURL}/sources`);
  }
}
