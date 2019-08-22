import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/system/header/header.component';
import {FooterComponent} from './component/system/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {SharedModule} from './component/shared/shared.module';
import {PagesModule} from './component/pages/pages.module';

import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        PagesModule,
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
