import { Component } from "@angular/core";
import { EventService } from "../../common/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
    styles: [`
        .pad-left { margin-left: 10px; }
    `]
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '09/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    events: any;
    constructor(private eventService : EventService) {}

    ngOnInit() {
        // this.events = this.eventService.getEvents();

        this.eventService.getEventsAsync().subscribe(
            events => {
                this.events = events
            }
        );
    }

    handleEventClicked(data) {
        console.log('received: ', data);
    }
}