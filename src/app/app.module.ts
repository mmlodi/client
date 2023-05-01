import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderService } from './loader.service';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
