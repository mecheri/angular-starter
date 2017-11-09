import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Logger } from "./logger.service";
import { SettingsService } from "./settings.service";
import { HttpResponseService } from "./http-response.service";

@Injectable()
export class AuthService {

    // store the URL so we can redirect after logging in
    redirectUrl: string = "/home";

    /**
     * Creates an instance of AuthService.
     * @param {HttpClient} http
     * @param {Logger} logger
     * @param {SettingsService} settingsService
     * @param {HttpResponseService} httpRespService
     * @memberof AuthService
     */
    constructor(private http: HttpClient,
        private logger: Logger,
        private settingsService: SettingsService,
        private httpRespService: HttpResponseService) { };

    /**
     * Authentification sur le serveur
     * Récupération du token d'authentification
     *
     * @param {string} login
     * @param {string} password
     * @returns {Promise<any>}
     *
     * @memberOf AuthService
     */
    check(login: string, password: string): Observable<any> {
        let body = "username=" + login + "&password=" + password;
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http
            .post<HttpResponse<any>>(`${this.settingsService.get().apiUrl}/Authentification`,
            body,
            { headers: headers })
            .map(res => {
                this.storeUser(res['data']);
                this.storeToken(res['data'].token_jwt);
                this.logger.log("Auth is done");
            })
            .catch(this.httpRespService.handleError);
    }

    /**
     * Stockage du token d'authentification
     *
     * @param {*} token
     *
     * @memberOf AuthService
     */
    storeToken(token: any) {
        if (token) {
            sessionStorage.setItem("access_token", token);
        }
    }

    /**
     * Stockage des données de l'utilisateur courant
     *
     * @param {*} data
     *
     * @memberOf AuthService
     */
    storeUser(data: any) {
        if (data) {
            delete data.groupes;
            delete data.token_jwt;
            sessionStorage.setItem("app_user", JSON.stringify(data));
        }
    }

    /**
     * Vérifie si l'utilisateur est connecté
     *
     * @returns
     *
     * @memberOf AuthService
     */
    isLoggedIn() {
        let token = localStorage.getItem("access_token");
        return token !== null ? true : false;
    }
}