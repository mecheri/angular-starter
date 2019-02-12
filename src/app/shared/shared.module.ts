import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNg
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';

// Simple notifcations
import { SimpleNotificationsModule } from 'angular2-notifications';

// Ngx Materialize
import { MzNavbarModule, MzInputModule, MzSelectModule, MzTimepickerModule, MzButtonModule, MzValidationModule, MzSpinnerModule, MzModalModule } from 'ngx-materialize'

// Angular Material
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

// Custom components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    DialogModule,
    TableModule,
    SimpleNotificationsModule.forRoot(),
    MzNavbarModule,
    MzInputModule,
    MzSelectModule,
    MzTimepickerModule,
    MzButtonModule,
    MzValidationModule,
    MzSpinnerModule,
    // mat
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    DialogModule,
    TableModule,
    SimpleNotificationsModule,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    MzNavbarModule,
    MzInputModule,
    MzSelectModule,
    MzTimepickerModule,
    MzButtonModule,
    MzValidationModule,
    MzSpinnerModule,
    // mat
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: []
})
export class SharedModule { }