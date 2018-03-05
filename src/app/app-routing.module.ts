import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IndexComponent } from './modules/index/components/index.component';

// Services
import { AuthGuardService } from './modules/core/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: '',
    loadChildren: './modules/index/index.module#IndexModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }