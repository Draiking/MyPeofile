import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {authRoutes} from './auth-routing.module';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {MatButtonModule, MatInputModule} from '@angular/material';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(authRoutes),
        MatButtonModule,
        MatInputModule,

    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class AuthModule {
    constructor() {
    }
}
