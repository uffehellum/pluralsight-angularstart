import { Component } from "@angular/core";


@Component({
    selector: 'pm-plusser',
    template: `
    <div>
        {{saldo}}<input [(ngModel)]="saldo">
        <button (click)="op()">Op</button>
        <button (click)="ned()">Ned</button>
    </div>`,
})
export class PlusserComponent {
    saldo: number = 0;
    op() { this.saldo++ }
    ned() { this.saldo-- }
}