import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {authRoutes} from './auth-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(authRoutes),

    ]
})
export class AuthModule {
    constructor() {
    }
}
