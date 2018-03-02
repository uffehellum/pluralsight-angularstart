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
import { ProductGuardService } from './products/product-guard-service';
import { ProductService } from './products/product.service';

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
      { path: 'products/:id',
        canActivate:[ProductGuardService], 
        component: ProductDetailComponent},
      { path: 'plusser', component: PlusserComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ], {useHash: true})],
  providers: [ ProductService,
    ProductGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
