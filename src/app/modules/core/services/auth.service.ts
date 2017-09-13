import { Component, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { SettingsService } from "./settings.service";
import { ExceptionService } from "./exception.service";

@Injectable()
export class AuthService {

    /**
     * Creates an instance of AuthService.
     *
     * @param {Http} http
     * @param {SettingsService} settingsService
     * @param {ExceptionService} exceptionService
     *
     * @memberOf AuthService
     */
    constructor(private http: Http,
        private settingsService: SettingsService,
        private exceptionService: ExceptionService) { };

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
    check(login: string, password: string): Promise<any> {
        let body = "username=" + login + "&password=" + password;
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http
            .post(`${this.settingsService.get().apiUrl}/Authentification`,
            body,
            { headers: headers })
            .toPromise()
            .then((res: Response) => {
                this.storeUser(res.json().data);
                this.storeToken(res.json().data.token_jwt);
                console.log("Auth is done");
            })
            .catch(this.exceptionService.handleException.bind(this));
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
        let token = sessionStorage.getItem("access_token");
        return token !== null ? true : false;
    }
}