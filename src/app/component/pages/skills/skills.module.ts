import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillsComponent} from './skills/skills.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SkillsComponent
    ],
    declarations: [SkillsComponent],
    providers: [],
})
export class SkillsModule {
}
