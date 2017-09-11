import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core/core.module';

import { DataTableModule, CalendarModule, ToolbarModule, BreadcrumbModule, SharedModule } from 'primeng/primeng';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

// Routing
import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UiComponent } from './components/ui/ui.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { BreadCrumbComponent } from './components/common/breadCrumb/breadcrumb.component';
import { PageNotFoundComponent } from './components/common/PageNotFound/page-not-found.component';
import { AccessDeniedComponent } from './components/common/accessDenied/access-denied.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent,
    UiComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    BreadCrumbComponent,
    PageNotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    CoreModule,
    DataTableModule,
    CalendarModule,
    ToolbarModule,
    BreadcrumbModule,
    SharedModule,
    SimpleNotificationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
