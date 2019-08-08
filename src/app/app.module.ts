import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/system/header/header.component';
import { FooterComponent } from './component/system/footer/footer.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ModalComponent } from './component/shared/modal/modal.component';
import {SkillsComponent} from './component/pages/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ModalComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
