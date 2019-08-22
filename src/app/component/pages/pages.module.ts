import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AboutModule} from './about/about.module';
import {ExperienceModule} from './experience/experience.module';
import {WorkingModule} from './working/working.module';
import {SkillsModule} from './skills/skills.module';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BrowserModule,
        AboutModule,
        ExperienceModule,
        SkillsModule,
        WorkingModule
    ],
    declarations: [],
    providers: [],
})
export class PagesModule {
}
