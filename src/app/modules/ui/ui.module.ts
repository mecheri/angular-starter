import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Routing Module
import { UiRoutingModule } from "./ui-routing.module";

// Components
import { UiComponent } from './components/ui.component';

// Services
import { UiService } from './services/ui.service';

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
    providers: [
        UiService
    ]
})
export class UiModule { }
