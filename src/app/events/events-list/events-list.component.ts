import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../common/event.service";
import { IEvent } from "../../entities/event";

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

    events: IEvent[];
    constructor(private eventService : EventService, private route:ActivatedRoute) {}

    ngOnInit() {
        // this.events = this.eventService.getEvents();

        // Gets the data by subscription
        // this.eventService.getEventsAsync().subscribe(
        //     events => {
        //         this.events = events
        //     }
        // );

        // Gets the data from the resolver that gets the data from the service using a subject subscription
        this.events = this.route.snapshot.data['events'];
    }

    handleEventClicked(data) {
        console.log('received: ', data);
    }
}