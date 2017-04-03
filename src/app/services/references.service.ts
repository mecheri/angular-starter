import { Component, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";

import { BaseService } from "../services/base.service";
import { ExceptionService } from "../services/exception.service";
import { SettingsService } from "../services/settings.service";

@Injectable()
export class ReferencesService extends BaseService {

    /**
     * Creates an instance of ReferencesService.
     * @param {Http} http
     * @param {Router} router
     * @param {SettingsService} settingsService
     * @param {ExceptionService} exceptionService
     *
     * @memberOf ReferencesService
     */
    constructor(private http: Http,
        private router: Router,
        private settingsService: SettingsService,
        private exceptionService: ExceptionService) {
        super();
    }
}