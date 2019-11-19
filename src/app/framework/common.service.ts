import {Injectable} from '@angular/core';
import {HttpRequest} from './HttpRequest';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class CommonService {

  constructor(private http: HttpClient) {
  }

  callHttpReq(req: HttpRequest) {
    const options = ({headers: req.headers});
    console.log(options);
    if (req.method === 'GET') {
      return this.http.get(req.url, options);
    } else if (req.method === 'POST') {
      return this.http.post(req.url, req.params, options);
    } else if (req.method === 'PATCH') {
      return this.http.patch(req.url, req.params, options);
    } else if (req.method === 'DELETE') {
      return this.http.delete(req.url, options);
    }
  }
}
