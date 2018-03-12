import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Routing Module
import { UserRoutingModule } from "./user-routing.module";

// Components
import { UserComponent } from './components/user.component';
import { UserViewComponent } from './components/view/user-view.component';
import { UserNewComponent } from './components/new/user-new.component';
import { UserEditComponent } from './components/edit/user-edit.component';
import { UserDeleteComponent } from './components/delete/user-delete.component';

// Services
import { UserService } from './services/user.service';
import { UserGuardService } from './services/user-guard.service';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        UserViewComponent,
        UserNewComponent,
        UserEditComponent,
        UserDeleteComponent
    ],
    providers: [
        UserService,
        UserGuardService
    ]
})
export class UserModule { }
