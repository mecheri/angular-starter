import { Component, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { ExceptionService } from "./exception.service";

/**
 * Service to handle global application resources
 *
 * @export
 * @class ResourcesService
 */
@Injectable()
export class ResourcesService {
    rsc: any;

    /**
     * Creates an instance of ResourcesService.
     * @param {Http} http
     * @param {ExceptionService} exceptionService
     *
     * @memberOf ResourcesService
     */
    constructor(private http: Http,
        private exceptionService: ExceptionService) {
    };

    /**
     * Load application resources
     *
     * @param {() => any} [callback]
     * @returns
     *
     * @memberOf ResourcesService
     */
    load() {
        let headers = new Headers();
        headers.append("Cache-Control", "no-cache");
        headers.append("Pragma", "no-cache");

        return new Promise(resolve => {
            this.http
                .get("res/_resources.json", { headers: headers })
                .map(res => res.json())
                .subscribe(
                (rsc) => {
                    this.rsc = rsc;
                    resolve(true);
                },
                (error) => console.log(error),
                () => console.log("Resources loaded")
                );
        });
    }

    /**
     * Read resources
     *
     * @returns
     *
     * @memberOf ResourcesService
     */
    get() {
        return this.rsc;
    }

    /**
     * Store resources
     *
     * @param {*} rsc
     *
     * @memberOf ResourcesService
     */
    store(rsc: any) {
        sessionStorage.setItem("app_resources", null);
        if (rsc) {
            sessionStorage.setItem("app_resources", rsc);
        }
    }

    /**
     * Lecture des données de l'utilisateur courant
     *
     * @returns
     *
     * @memberOf ResourcesService
     */
    getUser() {
        return JSON.parse(sessionStorage.getItem("app_user"));
    }
}