import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import {viewToDoComponent} from './ViewToDoList/viewToDoList.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'toDoList/:id', component: viewToDoComponent}
];

