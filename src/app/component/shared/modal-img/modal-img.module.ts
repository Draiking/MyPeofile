import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalImgComponent} from './modal-img/modal-img.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [ModalImgComponent],
    imports: [
        CommonModule,
        MatDialogModule
    ],
    exports: [
        ModalImgComponent
    ],
    entryComponents: [
        ModalImgComponent
    ]
})
export class ModalImgModule {
}
