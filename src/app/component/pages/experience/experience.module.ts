import {NgModule} from '@angular/core';

import {ExperienceComponent} from './experience/experience.component';
import {CommonModule} from '@angular/common';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ExperienceComponent
    ],
    declarations: [ExperienceComponent],
    providers: [],
})
export class ExperienceModule {
}
