import { Component } from "@angular/core";
import { NgModel } from '@angular/forms';

@Component({
    templateUrl: 'plusser.component.html',
})
export class PlusserComponent {
    pageTitle: 'Plusser'
    saldo: number = 0;
    op() { this.saldo++ }
    ned() { this.saldo-- }
}