import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from './shared/shared.module';
import {AboutModule} from './pages/about/about.module';
import {ExperienceModule} from './pages/experience/experience.module';
import {WorkingModule} from './pages/working/working.module';
import {CardsModule} from './shared/cards/cards.module';
import {ModalModule} from './shared/modal/modal.module';
import {ModalImgModule} from './shared/modal-img/modal-img.module';
import {HeaderModule} from './system/header/header.module';
import {FooterModule} from './system/footer/footer.module';
import {RouterModule, Routes} from '@angular/router';
import {ComponentComponent} from './component.component';
import {SkillsModule} from './pages/skills/skills.module';


export const appRoutes: Routes = [
    {
        path: '',
        component: ComponentComponent
    }

];


@NgModule({
    declarations: [
        ComponentComponent
    ],
    imports: [
        CommonModule,
        AboutModule,
        ExperienceModule,
        SkillsModule,
        SharedModule,
        WorkingModule,
        CardsModule,
        ModalModule,
        ModalImgModule,
        HeaderModule,
        FooterModule,
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        ComponentComponent
    ],
    providers: [],
})
export class ComponentModule {
    constructor() {
    }


}
