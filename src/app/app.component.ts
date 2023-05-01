import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { connect } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'geography-game-client';
  countries: any;
  guess: any;
  imageFlagSource: any;
  countryName: any;
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer,){}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(){
    this.http.get('https://5e8tjojjdl.execute-api.eu-central-1.amazonaws.com/Stage/get-flag').subscribe({
      next: response =>   this.countries = response,
      error: error => console.log(error),
      complete:() => {
        this.imageFlagSource = this.countries.FlagUrl;
        this.countryName = this.countries.Name;
      }
    });
    
    
  }

  checkGuess() {
    if(this.countryName == this.guess){
      this.getCountry();
      console.log("You are right:",this.guess);
      this.guess = '';
    }else{
      console.log("Wrong answer, try again!","tip:",this.countryName )
    };
  }
}
