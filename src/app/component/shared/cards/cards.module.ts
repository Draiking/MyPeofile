import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardsComponent} from './cards/cards.component';
import {MatCardModule} from '@angular/material';





@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [
        CardsComponent
    ],
    entryComponents: [
      CardsComponent
    ],
    declarations: [CardsComponent],
})
export class CardsModule {
}
