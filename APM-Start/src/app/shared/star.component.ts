import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core'
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5
    }
    onClick(): void { 
        // console.log(`click(${this.rating})`)
        this.ratingClicked.emit('clicked') 
    }

    @Input() rating: number
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
    starWidth: number
}
