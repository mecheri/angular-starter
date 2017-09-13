import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Components
import { LoginComponent } from './components/login.component';

// Routing
import { routing } from "./login.routing";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    providers: []
})
export class LoginModule { }
