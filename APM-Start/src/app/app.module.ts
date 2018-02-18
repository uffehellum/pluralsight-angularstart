import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlusserComponent } from './plusser/plusser.component';
import { ProductListComponent } from './products/productlist.component';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    PlusserComponent, 
    ProductListComponent, 
    StarComponent 
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
