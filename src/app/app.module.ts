import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { Error404Component } from './error/error404.component';
import { 
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListComponent,
  EventsThumbnailComponent
} from "./events/index";
import {
  EventListResolver,
  EventService
} from "./common/index";

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkCreateState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkCreateState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not save this event, do you really want to cancel?');
  return true;
}