import {Component} from '@angular/core';
import {BreadcrumbService} from '../starwars/service/app.breadcrumb.service';

@Component({
    templateUrl: './display.component.html'
})
export class DisplayComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Utilities'},
            {label: 'Display'}
        ]);
    }
}
