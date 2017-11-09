import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../../modules/shared/shared.module';

// Interceptors
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

// Services
import { Logger } from './services/logger.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpResponseService } from './services/http-response.service';
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';
import { MixinService } from './services/mixin.service';
import { NotificationsService } from 'angular2-notifications';

// Handlers
import { GlobalErrorHandler } from './handlers/error.handler';

// Factories
import { ResourcesFactory } from './factories/resources.factory';
import { SettingsFactory } from './factories/settings.factory';

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule
    ],
    declarations: [],
    exports: [
        HttpClientModule,
        SharedModule
    ],
    providers: [
        Logger,
        AuthService,
        AuthGuardService,
        HttpResponseService,
        MixinService,
        NotificationsService,
        SettingsService,
        {
            provide: APP_INITIALIZER,
            useFactory: SettingsFactory,
            deps: [SettingsService],
            multi: true
        },
        ResourcesService,
        {
            provide: APP_INITIALIZER,
            useFactory: ResourcesFactory,
            deps: [ResourcesService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        },
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
