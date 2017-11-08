import { Component, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";

// Services
import { Logger } from '../services/logger.service';

@Injectable()
export class ExceptionService {

    /**
     * Creates an instance of ExceptionService.
     * @param {Injector} injector
     * @memberof ExceptionService
     */
    constructor(private injector: Injector) { }

    /**
     * Handle Http Errors
     *
     * @param {*} error
     * @returns
     *
     * @memberOf ExceptionService
     */
    handleError(error: any) {
        let respBody, reject: string;
        // const logger = this.injector.get(Logger);

        if (typeof error._body === "string") {
            respBody = JSON.parse(error._body);

            if (respBody.errorValidation) {
                reject = respBody.errorValidation;
            }
            else {
                reject = respBody.message;
            }

        } else if (error.status === 0) {
            sessionStorage.removeItem("access_token");
            sessionStorage.removeItem("app_user");
            return;
        }
        else {
            reject = "Serveur indisponible !";
        }

        // logger.error(reject);

        return Promise.reject(reject);
    }
}