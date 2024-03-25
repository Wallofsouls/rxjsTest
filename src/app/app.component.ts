import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingStatus$: Observable<User[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadingStatus$ = this.getLoadingStatus();
  }

  getLoadingStatus(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos')
  }
}


