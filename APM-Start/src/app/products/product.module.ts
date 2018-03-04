import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard-service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [ 
      ProductListComponent,
      ProductDetailComponent,
      SharedModule ],
    imports: [ 
      BrowserModule, 
      HttpClientModule,
      RouterModule.forChild([
        { path: 'products', component: ProductListComponent},
        { path: 'products/:id',
          canActivate:[ProductGuardService], 
          component: ProductDetailComponent},
       
      ]),
      SharedModule],
    providers: [ ProductService,
      ProductGuardService ],
  })
  export class ProductModule { }