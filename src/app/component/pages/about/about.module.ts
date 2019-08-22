import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutComponent} from './about/about.component';
import {ModalModule} from '../../shared/modal/modal.module';


@NgModule({
    imports: [
        CommonModule,
        ModalModule,
    ],
 exports: [
     AboutComponent
 ],
 declarations: [AboutComponent],
 providers: [],
})
export class AboutModule { }
