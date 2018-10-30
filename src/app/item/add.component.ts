import { Router} from '@angular/router';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule }   from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent{
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
        private router: Router
    ) { 
        if (!this.cookieService.check('token')) {
            this.router.navigate(['/'])
        }
    }

    public submit() {
        let angular = this
        $.ajax({
            url:"https://api.myjson.com/bins",
            type:"POST",
            data: JSON.stringify(this.form),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data){
                angular.form.id = data.uri.split('/')[4]
                angular.list.push(angular.form)
                angular.router.navigate(['/dashboard'])
            }
        });
    }
}

export function getList() {
    return this.list
}
