import { Router, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule }   from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent{
    form = {
        "name": "",
        "age": "",
        "address": "",
        "email": "",
        "id": ""
    }
    list = []

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
            angular.form.name = data.name
            angular.form.age = data.age
            angular.form.address = data.address
            angular.form.email = data.email
        });
    }

    public submit() {
        let angular = this
        // $.ajax({
        //     url:"https://api.myjson.com/bins",
        //     type:"POST",
        //     data: JSON.stringify(this.form),
        //     contentType:"application/json; charset=utf-8",
        //     dataType:"json",
        //     success: function(data){
        //         angular.form.id = data.uri.split('/')[4]
        //         angular.list.push(angular.form)
        //         angular.router.navigate(['/view/'+angular.form.id])
        //     }
        // });

        $.ajax({
            url:"https://api.myjson.com/bins/"+this.activatedRoute.snapshot.params['id'],
            type:"PUT",
            data: JSON.stringify(this.form),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data){
                angular.router.navigate(['/view/'+angular.activatedRoute.snapshot.params['id']])
            }
        });
    }

    public back() {
        this.router.navigate(['/view/'+this.activatedRoute.snapshot.params['id']])
    }
}
