import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from './../../modules/shared/shared.module';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BaseService } from './services/base.service';
import { ExceptionService } from './services/exception.service';
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';
import { MixinService } from './services/mixin.service';

// Factories
import { ResourcesFactory } from './factories/resources.factory';
import { SettingsFactory } from './factories/settings.factory';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [],
    exports: [SharedModule],
    providers: [
        AuthService,
        AuthGuardService,
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
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
