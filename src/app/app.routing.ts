import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { UiComponent } from "./components/ui/ui.component";
import { PageNotFoundComponent } from "./components/common/PageNotFound/page-not-found.component";
import { AccessDeniedComponent } from "./components/common/accessDenied/access-denied.component";

import { AuthGuardService } from "./services/auth-guard.service";

const appRoutes: Routes = [
  {
    path: "login",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "accessdenied",
    component: AccessDeniedComponent
  },
  {
    path: "",
    component: IndexComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "ui",
        component: UiComponent,
        canActivate: [AuthGuardService]
      },
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });