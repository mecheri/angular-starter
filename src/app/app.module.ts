import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';

// Routing
import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';
// import { IndexComponent } from "./modules/index/components/index.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    routing
  ],
  declarations: [
    AppComponent,
    // IndexComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
