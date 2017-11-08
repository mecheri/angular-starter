import { ErrorHandler, Injectable, Injector } from '@angular/core';

// Services
import { Logger } from '../services/logger.service';

/**
 * App global error handler
 *
 * @export
 * @class GlobalErrorHandler
 * @implements {ErrorHandler}
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    /**
     * Creates an instance of GlobalErrorHandler.
     * @param {Injector} injector
     * @memberof GlobalErrorHandler
     */
    constructor(private injector: Injector) { }

    /**
     * Handle error
     *
     * @param {any} error
     * @memberof GlobalErrorHandler
     */
    handleError(error) {
        const logger = this.injector.get(Logger);
        if (window.confirm('Une error javascipt s\'est produite !!!')) {
            window.location.reload();
        }
    }
}