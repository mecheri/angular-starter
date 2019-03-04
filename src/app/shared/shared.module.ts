import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNg
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Ngx Materialize
import {
  MzNavbarModule,
  MzInputModule,
  MzSelectModule,
  MzTimepickerModule,
  MzButtonModule,
  MzValidationModule,
  MzSpinnerModule
} from 'ngx-materialize'

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
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    DialogModule,
    TableModule,
    // flex Layout
    FlexLayoutModule,
    // materialize
    MzNavbarModule,
    MzInputModule,
    MzSelectModule,
    MzTimepickerModule,
    MzButtonModule,
    MzValidationModule,
    MzSpinnerModule,
    // material
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    ErrorComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    DialogModule,
    TableModule,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    // flex Layout
    FlexLayoutModule,
    // materialize
    MzNavbarModule,
    MzInputModule,
    MzSelectModule,
    MzTimepickerModule,
    MzButtonModule,
    MzValidationModule,
    MzSpinnerModule,
    // material
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class SharedModule { }