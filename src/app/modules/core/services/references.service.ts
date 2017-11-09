import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";

import { SettingsService } from "../services/settings.service";
import { HttpResponseService } from "../services/http-response.service";

@Injectable()
export class ReferencesService {

    /**
     * Creates an instance of ReferencesService.
     * @param {HttpClient} http
     * @param {Router} router
     * @param {SettingsService} settingsService
     * @param {HttpResponseService} httpRespService
     * @memberof ReferencesService
     */
    constructor(private http: HttpClient,
        private router: Router,
        private settingsService: SettingsService,
        private httpRespService: HttpResponseService) {
    }
}