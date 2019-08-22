import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {HeaderModule} from './component/system/header/header.module';
import {FooterModule} from './component/system/footer/footer.module';





@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HeaderModule,
        FooterModule,
        MatButtonModule,
        MatDialogModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
