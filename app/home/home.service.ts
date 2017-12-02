import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class toDoService {
  constructor(private http: Http) {}

  getUsers(url) {
    return this.http.get(url)
      .map((res) => res.json());
  }

}
