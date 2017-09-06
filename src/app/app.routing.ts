import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent }
 // { path: 'not-found', component: NotFoundComponent },
 // { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
