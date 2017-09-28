import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { UiComponent } from "./components/ui.component";

const uiRoutes: Routes = [
    {
        path: "",
        component: UiComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(uiRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UiRoutingModule { }