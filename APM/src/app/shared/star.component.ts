import { Component, OnChanges, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} clicked`);
    }
}