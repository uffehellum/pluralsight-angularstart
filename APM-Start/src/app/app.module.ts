import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { PlusserComponent } from './plusser/plusser.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    PlusserComponent, 
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    WelcomeComponent ],
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/#id', component: ProductDetailComponent},
      { path: 'plusser', component: PlusserComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
      // NOPE: {path: '**', component: PageNotFoundComponent}
    ], {useHash: true})],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
