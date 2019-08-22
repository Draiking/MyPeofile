import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockListComponent} from './block-list/block-list.component';
import {BlockDetaliComponent} from './block-detali/block-detali.component';
import {RouterModule} from '@angular/router';


const blockRoutes = [

    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: BlockListComponent
    },
    {
        path: 'detali',
        component: BlockDetaliComponent
    }
];


@NgModule({
    declarations: [BlockListComponent, BlockDetaliComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(blockRoutes)
    ]
})
export class BlogModule {
}
