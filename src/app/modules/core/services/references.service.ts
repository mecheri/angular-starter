import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";

import { ExceptionService } from "../services/exception.service";
import { SettingsService } from "../services/settings.service";

@Injectable()
export class ReferencesService {

    /**
     * Creates an instance of ReferencesService.
     * @param {Http} http
     * @param {Router} router
     * @param {SettingsService} settingsService
     * @param {ExceptionService} exceptionService
     *
     * @memberOf ReferencesService
     */
    constructor(private http: HttpClient,
        private router: Router,
        private settingsService: SettingsService,
        private exceptionService: ExceptionService) {
    }
}