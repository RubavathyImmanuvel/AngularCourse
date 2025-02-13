import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'feature1', 
        loadComponent:() => import('./feature1/feature1.component').then(m => m.Feature1Component)} //lazy loading
];
