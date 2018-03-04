import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlusserComponent } from './plusser.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlusserComponent],     
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'plusser', component: PlusserComponent},
    ])
  ],
})
export class PlusserModule { }
