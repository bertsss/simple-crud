import { Router} from '@angular/router';
import { Component, NgModule} from '@angular/core';
import { AuthService, FacebookLoginProvider} from 'angular5-social-login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@NgModule({
    exports: [ LoginComponent ]
})
export class LoginComponent {

  constructor( 
    private socialAuthService: AuthService,
    private  router: Router,
    private cookieService: CookieService
  ) {
      let cookieExist = this.cookieService.check('token')

      if (cookieExist) {
          this.router.navigate(['/dashboard'])
      }
  }

  public fbLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // console.log("Facebook sign in data : " , userData);
        this.cookieService.set('token', userData.token)
        this.router.navigate(['/dashboard'])
      }
    );
  }

}
