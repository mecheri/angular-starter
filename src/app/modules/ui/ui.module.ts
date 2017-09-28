import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Routing Module
import { UiRoutingModule } from "./ui-routing.module";

// Components
import { UiComponent } from './components/ui.component';

@NgModule({
    imports: [
        SharedModule,
        UiRoutingModule
    ],
    declarations: [
        UiComponent
    ],
    exports: [
        UiComponent
    ],
    providers: []
})
export class UiModule { }
