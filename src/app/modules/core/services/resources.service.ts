import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { HttpResponseService } from "./http-response.service";

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
     * @param {HttpClient} http
     * @param {HttpResponseService} httpRespService
     * @memberof ResourcesService
     */
    constructor(private http: HttpClient,
        private httpRespService: HttpResponseService) {
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
        let headers = new HttpHeaders();
        headers.append("Cache-Control", "no-cache");
        headers.append("Pragma", "no-cache");

        return new Promise(resolve => {
            this.http
                .get("res/_resources.json", { headers: headers })
                .map((res: HttpResponse<any>) => res)
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