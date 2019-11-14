import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'gallery',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../gallery/gallery.module').then(m => m.GalleryPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/gallery',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/gallery',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
