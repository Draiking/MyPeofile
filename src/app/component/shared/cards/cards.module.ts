import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardsComponent} from './cards/cards.component';
import {MatButtonModule, MatCardModule} from '@angular/material';





@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
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
