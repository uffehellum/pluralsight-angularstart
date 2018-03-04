import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { PlusserModule } from './plusser/plusser.module';
import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlusserModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ], { useHash: true }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
