import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserComponent } from './components/user.component';
import { UserViewComponent } from './components/view/user-view.component';
import { UserNewComponent } from './components/new/user-new.component';
import { UserEditComponent } from './components/edit/user-edit.component';

// Services
import { UserGuardService } from './services/user-guard.service';

const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'view/:id',
        component: UserViewComponent
    },
    {
        path: 'new',
        component: UserNewComponent,
        canDeactivate: [UserGuardService]
    },
    {
        path: 'edit/:id',
        component: UserEditComponent,
        canDeactivate: [UserGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }