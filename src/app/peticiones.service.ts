/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingStatus$: Observable<string> | undefined; // Observable to store loading status

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadingStatus$ = this.getLoadingStatus();
  }

  getLoadingStatus(): Observable<string> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        map(data => data['title']), // Assuming 'title' is the property containing the loading status
      );
  }
}
*/
