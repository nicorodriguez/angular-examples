import { Routes } from "@angular/router";
import { Error404Component } from "./error/error404.component";
import { 
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListComponent
} from "./events/index";
import {
    EventListResolver
} from "./common/index";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'error/404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
]