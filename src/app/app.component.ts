import { Component } from '@angular/core';

// Environment
import { environment } from './../environments/environment';

// Services
import { Logger } from './modules/core/services/logger.service';

/**
 * Application Component
 *
 * @export
 * @class AppComponent
 */
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    /**
     * Creates an instance of AppComponent.
     * @param {Logger} logger 
     * @memberof AppComponent
     */
    constructor(
        private logger: Logger
    ) {
        this.logger.trace(`Welcome to ANGULAR CLI STARTER, the current environment is: ${environment.envName}`);
    }
}
