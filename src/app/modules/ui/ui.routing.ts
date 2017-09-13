import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { UiComponent } from "./components/ui.component";

const routes: Routes = [
    {
        path: "",
        component: UiComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);