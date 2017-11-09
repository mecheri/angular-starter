import { Component, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { Logger } from '../services/logger.service';

@Injectable()
export class HttpResponseService {

    private logger: Logger;

    /**
     * Creates an instance of HttpErrorService.
     * @memberof HttpErrorService
     */
    constructor() { }

    /**
     * Handle Http Errors
     *
     * @param {*} error
     * @returns {Observable<any>}
     * @memberof HttpErrorService
     */
    handleError(error: any): Observable<any> {
        let respBody, reject: string;
        this.logger = new Logger();

        // TODO
        // if (typeof error._body === "string") {
        //     respBody = JSON.parse(error._body);

        //     if (respBody.errorValidation) {
        //         reject = respBody.errorValidation;
        //     }
        //     else {
        //         reject = respBody.message;
        //     }

        // } else if (error.status === 0) {
        //     sessionStorage.removeItem("access_token");
        //     sessionStorage.removeItem("app_user");
        //     return;
        // }
        // else {
        //     reject = "Serveur indisponible !";
        // }

        reject = "Erreur Serveur !";
        this.logger.error(reject);

        return Observable.throw(reject);
    }
}