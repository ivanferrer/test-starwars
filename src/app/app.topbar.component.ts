import { Component, OnInit } from '@angular/core';
import { AppMainComponent} from './app.main.component';
import { User } from './starwars/domain/user'
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    constructor(public app: AppMainComponent, public router: Router) {}

    user:User

    ngOnInit() {
   
    }

  
}
