import { NgModule } from "@angular/core";
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Vendor modules
import { BreadcrumbModule, CalendarModule, DataTableModule, ToolbarModule } from 'primeng/primeng';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

// Custom components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BreadCrumbComponent } from './components/breadCrumb/breadcrumb.component';

// Services
import { Spinner } from './services/spinner.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        BreadcrumbModule,
        CalendarModule,
        DataTableModule,
        ToolbarModule,
        SimpleNotificationsModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        SpinnerComponent,
        BreadCrumbComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        BreadcrumbModule,
        CalendarModule,
        ToolbarModule,
        DataTableModule,
        SimpleNotificationsModule,
        BsDropdownModule,
        CollapseModule,
        NavbarComponent,
        SidebarComponent,
        SpinnerComponent,
        BreadCrumbComponent
    ],
    providers: [
        Spinner
    ]
})
export class SharedModule { }