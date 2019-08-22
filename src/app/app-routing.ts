import {Routes} from '@angular/router';



export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full', redirectTo: 'main'
    },
    {
        path: 'main',
        loadChildren: './component/component.module#ComponentModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    }

];
