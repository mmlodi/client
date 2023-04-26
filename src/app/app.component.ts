import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geography-game-client';
  countries: any;

  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://5e8tjojjdl.execute-api.eu-central-1.amazonaws.com/Stage/get-flag').subscribe({
      next: response => this.countries = response,
      error: error => console.log(error),
      complete:() => console.log('Request completed')
    })
  }
}
