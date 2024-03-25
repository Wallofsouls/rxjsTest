import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user';
import { UsersDetails } from 'src/app/users-details';
import { CombinedUserDetails } from 'src/app/combo-estructura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  combinedData$: Observable<CombinedUserDetails[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.combinedData$ = this.getCombinedData();
  }

  getLoadingStatus(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getLoadingStatus2(): Observable<UsersDetails> {
    return this.http.get<UsersDetails>('https://jsonplaceholder.typicode.com/users/1');
  }

  getCombinedData(): Observable<CombinedUserDetails[]> {
    return forkJoin({
      todos: this.getLoadingStatus(),
      userDetails: this.getLoadingStatus2()
    }).pipe(
      map(({ todos, userDetails }) =>
        todos.map(todo => ({
          ...todo,
          ...userDetails
        }) as CombinedUserDetails)
      )
    );
  }
}



