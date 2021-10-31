import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppHomeComponent } from './starwars/pages/app.home.component';
import {AppListPeoplesComponent } from './starwars/pages/app.list_peoples.component';

import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './starwars/pages/app.notfound.component';
import {AppErrorComponent} from './starwars/pages/app.error.component';
import {AppAccessdeniedComponent} from './starwars/pages/app.accessdenied.component';

const publicRoutes =  [
        {path:'', component: AppHomeComponent},
        {path:'listar-pessoas', component:AppListPeoplesComponent},
        {path: 'error', component:AppErrorComponent},
        {path: 'access', component: AppAccessdeniedComponent},
        {path: 'notfound', component: AppNotfoundComponent},
        {path: '**', redirectTo:  '/notfound'}
    ];

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: AppMainComponent, children: publicRoutes}], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

