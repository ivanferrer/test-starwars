import {Component} from '@angular/core';
import {BreadcrumbService} from '../starwars/service/app.breadcrumb.service';

@Component({
    templateUrl: './widgets.component.html'
})
export class WidgetsComponent {
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Utilities'},
            {label: 'Widgets'}
        ]);
    }
}
