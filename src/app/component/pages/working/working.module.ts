import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkingComponent} from './working/working.component';
import {CardsModule} from '../../shared/cards/cards.module';

@NgModule({
    imports: [
        CommonModule,
        CardsModule
    ],
    exports: [
        WorkingComponent
    ],
    declarations: [WorkingComponent],
    providers: [],
})
export class WorkingModule {
}
