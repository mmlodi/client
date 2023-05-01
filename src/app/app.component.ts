import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
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
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private toastr: ToastrService){}

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
    if(this.countryName.toLowerCase() == this.guess.toLowerCase()){
      this.toastr.success("You are right!",this.guess);
      this.getCountry();
    }else{
      this.toastr.warning("Try again!","if you want a tip, look at the console");
      console.log("Wrong answer, try again!","tip:",this.countryName );
    };
  }
}
