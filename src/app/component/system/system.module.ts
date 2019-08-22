import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterModule} from './footer/footer.module';
import {HeaderModule} from './header/header.module';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        FooterModule,
        HeaderModule
    ],
    declarations: [],
    providers: [],
})
export class SystemModule {
}
