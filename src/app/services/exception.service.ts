import { Component, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class ExceptionService {
    private router: Router;

    /**
     * Creates an instance of ExceptionService.
     *
     * @memberOf ExceptionService
     */
    constructor(private injector: Injector) {
        this.router = this.injector.get(Router);
    }

    /**
     * Handle Exception
     *
     * @param {*} error
     * @returns
     *
     * @memberOf ExceptionService
     */
    handleException(error: any) {
        let respBody, reject: string;
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
            this.router.navigate(["/login"]);
            return;
        }
        else {
            reject = "Serveur indisponible !";
        }

        console.error("An error occurred : ", reject);
        return Promise.reject(reject);
    }

    /**
     * Handle Exception with response body
     *
     * @param {*} error
     * @returns
     *
     * @memberOf ExceptionService
     */
    handleExceptionWithResponseBody(error: any) {
        let respBody, reject: string;
        if (typeof error === "string") {
            respBody = JSON.parse(error);
            if (respBody.errorValidation) {
                reject = respBody.errorValidation;
            }
            else {
                reject = respBody.message;
            }
        }
        console.error("An error occurred : ", reject);
        return Promise.reject(reject);
    }

    /**
     * Handle Error (validation or error messages)
     *
     * @param {*} model
     * @param {(string | Object)} error
     *
     * @memberOf ExceptionService
     */
    handleError(model: any, error: string | Object) {
        if (typeof error === "object") {
            for (let prop in error) {

                let modelCopy: any = model;
                let array = prop.split(".");

                if (array.length > 1) {

                    while (array.length > 1) {
                        if (modelCopy.hasOwnProperty(array[0])) {
                            modelCopy = modelCopy[array[0]];
                        }
                        array.splice(0, 1);
                    }

                    if (modelCopy.hasOwnProperty(array[0])) {
                        modelCopy["_" + array[0]] = error[prop][0];
                    }

                } else {
                    if (model.hasOwnProperty(prop)) {
                        model["_" + prop] = error[prop][0];
                    }
                }
            }
        } else {
            model.error = error;
        }
    }
}