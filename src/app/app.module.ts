import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule, CalendarModule, ToolbarModule, BreadcrumbModule, SharedModule } from "primeng/primeng";
import { SimpleNotificationsModule } from "angular2-notifications";
import { BsDropdownModule } from "ng2-bootstrap/dropdown";
import { CollapseDirective } from "ng2-bootstrap";

// Routing
import { routing } from "./app.routing";

// Components
import { AppComponent } from "./app.component";
import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { UiComponent } from "./components/ui/ui.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { SidebarComponent } from "./components/common/sidebar/sidebar.component";
import { SpinnerComponent } from "./components/common/spinner/spinner.component";
import { BreadCrumbComponent } from "./components/common/breadCrumb/breadcrumb.component";
import { PageNotFoundComponent } from "./components/common/PageNotFound/page-not-found.component";
import { AccessDeniedComponent } from "./components/common/accessDenied/access-denied.component";

// Services
import { BaseService } from "./services/base.service";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { ExceptionService } from "./services/exception.service";
import { SettingsService } from "./services/settings.service";
import { ResourcesService } from "./services/resources.service";
import { MixinService } from "./services/mixin.service";

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
    AccessDeniedComponent,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    CalendarModule,
    ToolbarModule,
    BreadcrumbModule,
    SharedModule,
    SimpleNotificationsModule,
    BsDropdownModule.forRoot(),
    routing
  ],
  providers: [
    BaseService,
    AuthService,
    AuthGuardService,
    ExceptionService,
    SettingsService, {
      provide: APP_INITIALIZER,
      useFactory: (config: SettingsService) => () => config.load(),
      deps: [SettingsService],
      multi: true
    },
    ResourcesService, {
      provide: APP_INITIALIZER,
      useFactory: (rsc: ResourcesService) => () => rsc.load(),
      deps: [ResourcesService],
      multi: true
    },
    MixinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
