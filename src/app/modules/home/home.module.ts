import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './components/home.component';

// Routing
import { routing } from "./home.routing";

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }
