import { Routes } from "@angular/router";
import { EventListResolver } from "./common/event-list-resolver.service";
import { Error404Component } from "./error/error404.component";
import { CreateEventComponent } from "./events/event-creation/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListComponent } from "./events/events-list/events-list.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'error/404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
]