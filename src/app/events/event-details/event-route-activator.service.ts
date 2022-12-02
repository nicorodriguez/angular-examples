import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "src/app/common/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists)
            this.router.navigate(['/error/404']);

        return eventExists;
    }    
}