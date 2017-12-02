import { Component, OnInit } from '@angular/core';
import { toDoService } from './home.service';
import { Observable } from 'rxjs/Observable';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private users: any;

  constructor(private _http: toDoService, private router: Router) {


  }

 ngOnInit() {

    this.serviceCall();

  }

  public serviceCall() {

    let URI = "https://jsonplaceholder.typicode.com/users";

    this._http.getUsers(URI)
      .subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  public viewToDoList(data) {
    console.log(data);
    this.router.navigate(['/toDoList', data.id]);
  }
}
