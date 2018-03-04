import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FizzBuzzService } from './service/fizz-buzz.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FizzBuzzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FizzBuzzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
