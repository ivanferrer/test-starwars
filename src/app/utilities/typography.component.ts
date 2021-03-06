import {Component} from '@angular/core';
import {BreadcrumbService} from '../starwars/service/app.breadcrumb.service';

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent {
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Utilities'},
            {label: 'Typography'}
        ]);
    }
}
