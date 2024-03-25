import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, combineLatestWith } from 'rxjs/operators';
import { User } from 'src/app/user';
import { UsersDetails } from 'src/app/users-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingStatus$: Observable<User[]> | undefined;
  loadingStatus2$: Observable<UsersDetails> | undefined;
  combinedData$: Observable<{ todos: User[], userDetails: UsersDetails }> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadingStatus$ = this.getLoadingStatus();
    this.loadingStatus2$ = this.getLoadingStatus2();
    this.combinedData$ = this.getCombinedData();
  }

  getLoadingStatus(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getLoadingStatus2(): Observable<UsersDetails> {
    return this.http.get<UsersDetails>('https://jsonplaceholder.typicode.com/users/1');
  }

  getCombinedData(): Observable<{ todos: User[], userDetails: UsersDetails }> {
    // Start with one observable and combine it with another using combineLatestWith
    return this.getLoadingStatus().pipe(
      combineLatestWith(this.getLoadingStatus2()),
      map(([todos, userDetails]) => ({ todos, userDetails }))
    );
  }
}


