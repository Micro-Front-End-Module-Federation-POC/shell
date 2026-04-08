import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Fallback } from '../fallback/fallback';
import { HowToImplement } from '../how-to-implement/how-to-implement';
import { Demo } from './demo';

export const routes: Routes = [

    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfe-products',
                exposedModule: './Component',
            }).then(m => m.App).catch(() => Fallback),
    },
    {
        path: 'cart',
        loadComponent: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfe-cart',
                exposedModule: './Component',
            }).then(m => m.App).catch(() => Fallback),
    },
    {
        path: 'checkout',
        loadComponent: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfe-checkout',
                exposedModule: './Component',
            }).then(m => m.App).catch(() => Fallback),
    },
    {
        path: '**',
        redirectTo: 'products',
    }
];