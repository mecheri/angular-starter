import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Components
import { UiComponent } from './components/ui.component';

// Routing
import { routing } from "./ui.routing";

@NgModule({
    imports: [
        SharedModule,
        routing
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