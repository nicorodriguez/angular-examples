import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'events-thumbnail',
    templateUrl: 'events-thumbnail.component.html',
    styles:[`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .well h2 { margin-top: 10px; }
        .thumbnail { min-height: 210px; }
        .green { color: #003300 !important; }
        .red { color: red !important; }
    `]
})
export class EventsThumbnailComponent {
    @Input() event: any;
    @Output() eventEmitter = new EventEmitter();
    someValue: string = "some value";

    handleClick() {
        console.log("clicked!");

        this.eventEmitter.emit(this.event);
    }

    logAddress() {
        console.log('Address: ' + this.event.location.address + ' ' + this.event.location.city + ' ' + this.event.location.country )
    }

    //can return an object or a string
    getPriceClass() {
        const isExpensive = this.event && this.event.price > 800.00;
        return {red: isExpensive, bold: isExpensive}

        /*
        if (this.event && this.event.price > 800){
            return 'green bold'
        }
        return ''
        */
    }
}