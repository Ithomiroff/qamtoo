import axios, { AxiosInstance } from "axios";

class Api {
  private instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
    });
  }

  get = <R>(url: string, params?: Record<string, any>) => this.instance.get<R>(url, { params}).then(res => res.data as R);
  post = <Req, Res>(url: string, body: Req) => this.instance.post<Req, Res>(url, body).then(res => res.data);

  put = <Req, Res>(url: string, body: Req) => this.instance.put<Req, Res>(url, body).then(res => res.data);
}

export default new Api('http://89.111.172.165:3000');

const clientApi = new Api('/api');

export {
  clientApi
};