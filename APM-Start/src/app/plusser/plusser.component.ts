import { Component } from "@angular/core";


@Component({
    template: `
    <div>
        <div class='panel-heading'>
            {{pageTitle}}
        </div>
        {{saldo}}<input [(ngModel)]="saldo">
        <button (click)="op()">Op</button>
        <button (click)="ned()">Ned</button>
    </div>`,
})
export class PlusserComponent {
    pageTitle: 'Plusser'
    saldo: number = 0;
    op() { this.saldo++ }
    ned() { this.saldo-- }
}