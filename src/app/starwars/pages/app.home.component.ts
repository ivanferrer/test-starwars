import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from '../service/app.breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
})
export class AppHomeComponent implements OnInit {

    paramsFilter: any = {};

    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
          {label: 'Bem-vindo à starwars'}
      ]);
    }

    ngOnInit() {
    }

}
