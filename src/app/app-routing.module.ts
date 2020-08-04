import { NgModule } from '@angular/core';
import { PagesRouterModule } from './pages/pages.routing';
import { AuthRouterModule } from './auth/auth-routing.module';

import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRouterModule,
    AuthRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
