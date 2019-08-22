import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {ModalImgModule} from './modal-img/modal-img.module';
import {CardsModule} from './cards/cards.module';
import {ModalModule} from './modal/modal.module';





@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        BrowserModule,
        CardsModule,
        ModalImgModule,
        ModalModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule {
}
