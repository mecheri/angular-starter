import { Component, Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";

/**
 * Service to handle global application settings
 *
 * @export
 * @class SettingsService
 */
@Injectable()
export class SettingsService {
    config: any;

    /**
     * Creates an instance of SettingsService.
     *
     * @param {Http} http
     *
     * @memberOf SettingsService
     */
    constructor(private http: Http) { }

    /**
     * Load Application Settings
     *
     * @param {() => any} [callback]
     * @returns
     *
     * @memberOf SettingsService
     */
    load(callback?: () => any) {
        let headers = new Headers();
        headers.append("Cache-Control", "no-cache");
        headers.append("Pragma", "no-cache");

        return new Promise(resolve => {
            this.http
                .get("src/res/_settings.json", { headers: headers })
                .map(res => res.json())
                .subscribe(
                    (config) => {
                        this.config = config;
                        resolve(true);
                    },
                    (error) => console.log(error),
                    () => console.log("Settings loaded")
                );
        });
    }

    /**
     * Lecture des ressources
     *
     * @returns
     *
     * @memberOf SettingsService
     */
    get() {
        return this.config;
    }

    /**
     * Stockage des ressources
     *
     * @param {*} settings
     *
     * @memberOf SettingsService
     */
    store(settings: any) {
        sessionStorage.setItem("app_settings", null);
        if (settings) {
            sessionStorage.setItem("app_settings", settings);
        }
    }
}