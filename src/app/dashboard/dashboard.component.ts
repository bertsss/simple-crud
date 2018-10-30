import { Router} from '@angular/router';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
    constructor( 
        private cookieService: CookieService,
        private router: Router
    ) { 
        if (!this.cookieService.check('token')) {
            this.router.navigate(['/'])
        }
        
    }

    public logout() {
        this.cookieService.delete('token')
        window.location.reload()
    }

    public add() {
        this.router.navigate(['/add'])
    }
}
