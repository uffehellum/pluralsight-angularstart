import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { PlusserComponent } from './plusser/plusser.component';
import { ProductListComponent } from './products/productlist.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    PlusserComponent, 
    ProductListComponent,
    StarComponent,
    ProductDetailComponent ],
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
