import { Component, OnInit } from '@angular/core';
import { toDoService } from './../home/home.service';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'viewToDo',
    styleUrls: ['./viewToDoList.component.css'],
    templateUrl: './viewToDoList.component.html'
})

export class viewToDoComponent implements OnInit {

    private id: number;
    private route: ActivatedRoute;
    private dataArray:any;

    constructor(private _http: toDoService, router: Router, route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
     }

    ngOnInit() {
       
       // this.id = this.route.snapshot.params['id'];
        
        this.serviceCall();
    }

    public serviceCall() {
        let URI = "https://jsonplaceholder.typicode.com/todos?userId=";

        this._http.getUsers(URI + this.id)
            .subscribe(
            data => {
                this.dataArray=data;
                console.log(data);
            },
            error => {
                console.log(error);
            });
    }


}