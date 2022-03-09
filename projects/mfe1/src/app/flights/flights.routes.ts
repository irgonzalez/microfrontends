import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { LazyComponent } from './lazy/lazy.component';

export const FLIGHTS_ROUTES: Routes = [
    {
        path: 'flights-search',
        component: FlightsSearchComponent
    },
    {
        path: 'lorem',
        component: LazyComponent
    },
    {
        path: 'lorem/parametros/:id',
        component: LazyComponent
    }
];
