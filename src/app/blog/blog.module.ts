import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockListComponent} from './block-list/block-list.component';
import {BlockDetaliComponent} from './block-detali/block-detali.component';
import {RouterModule} from '@angular/router';
import {BlockSelectComponent} from './block-select/block-select.component';
import {FormsModule} from '@angular/forms';
import {SectionBlogComponent} from './shared-blog/section-blog/section-blog.component';
import {LayoutComponent} from './layout/layout.component';
import {MatButtonModule} from '@angular/material';
import { PostsPipe } from './posts.pipe';


const blockRoutes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'detail/:id',
                component: BlockDetaliComponent
            },
            {
                path: 'list',
                component: BlockListComponent
            },
        ]
    },
];


@NgModule({
    declarations: [
        BlockListComponent,
        BlockDetaliComponent,
        BlockSelectComponent,
        SectionBlogComponent,
        LayoutComponent,
        PostsPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        RouterModule.forChild(blockRoutes)
    ]
})
export class BlogModule {
}
