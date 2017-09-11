import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { BaseService } from './services/base.service';
import { ExceptionService } from './services/exception.service';
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';
import { MixinService } from './services/mixin.service';

// Factories
import { ResourcesFactory } from './factories/resources.factory';
import { SettingsFactory } from './factories/settings.factory';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        BaseService,
        ExceptionService,
        SettingsService, {
            provide: APP_INITIALIZER,
            useFactory: SettingsFactory,
            deps: [SettingsService],
            multi: true
        },
        ResourcesService, {
            provide: APP_INITIALIZER,
            useFactory: ResourcesFactory,
            deps: [ResourcesService],
            multi: true
        },
        MixinService
    ]
})
export class CoreModule { }
