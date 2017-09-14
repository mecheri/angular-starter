import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { IndexComponent } from "./components/index.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
        children: [
          {
            path: "",
            redirectTo: "/home",
            pathMatch: "full"
          },
          {
            path: "home",
            loadChildren: "./modules/home/home.module#HomeModule",
          },
          {
            path: "ui",
            loadChildren: "./modules/ui/ui.module#UiModule",
          }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);