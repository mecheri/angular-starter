import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Components
import { IndexComponent } from './components/index.component';

// Routing
import { routing } from "./index.routing";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        IndexComponent
    ],
    exports: [
        IndexComponent
    ],
    providers: []
})
export class IndexModule { }
