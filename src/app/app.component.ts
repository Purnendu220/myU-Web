import { Component,Inject} from '@angular/core';
import { Title,DOCUMENT  } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute,NavigationStart,NavigationCancel,NavigationError,Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
   }
   navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {

    }
    if (event instanceof NavigationEnd) {

    }
    if (event instanceof NavigationCancel) {
    }
    if (event instanceof NavigationError) {
    }
  }
  title = 'app';
}
