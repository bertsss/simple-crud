import { Router, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import $ from 'jquery';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: ['button {color: #fff; margin-right: 10px;}']
})
export class ViewComponent{
    name: ""
    age: ""
    address: ""
    email: ""

    constructor( 
        private cookieService: CookieService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { 
        if (!this.cookieService.check('token')) {
            this.router.navigate(['/'])
        }

        let angular = this
        $.get("https://api.myjson.com/bins/"+this.activatedRoute.snapshot.params['id'], function(data) {
            angular.name = data.name
            angular.age = data.age
            angular.address = data.address
            angular.email = data.email
        });
    }

    public update() {
        this.router.navigate(['/update/'+this.activatedRoute.snapshot.params['id']])
    }

    public back() {
        this.router.navigate(['/'])
    }
}
