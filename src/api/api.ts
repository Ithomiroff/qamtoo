import axios, { AxiosInstance, AxiosResponse } from "axios";

class Api {
  private instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
    });
  }

  get = <Res>(url: string, params?: Record<string, any>) => this.instance.get(url, { params}).then(res => res.data as Res);
  post = <Req, Res>(url: string, body: Req) => this.instance.post<Req, AxiosResponse<Res>>(url, body)
    .then(res => res.data as Res);

  put = <Req, Res>(url: string, body: Req) => this.instance.put<AxiosResponse<Res>>(url, body)
    .then(res => res.data as Res);
}

export default new Api('http://89.111.172.165:3000');

const clientApi = new Api('/api');

export {
  clientApi
};