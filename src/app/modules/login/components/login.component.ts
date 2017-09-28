"use strict";

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Logger } from "../../core/services/logger.service";
import { AuthService } from "../../core/services/auth.service";

@Component({
    templateUrl: "./login.component.html",
    providers: []
})
export class LoginComponent {
    // props
    username: string;
    password: string;
    message: string;
    isRequesting: boolean;

    /**
     * Creates an instance of LoginComponent.
     * @param {Router} router
     * @param {ActivatedRoute} route
     * @param {Logger} logger
     * @param {AuthService} authService
     * @memberof LoginComponent
     */
    constructor(private router: Router,
        private route: ActivatedRoute,
        private logger: Logger,
        private authService: AuthService) { }

    /**
     * Login to application.
     *
     *
     * @memberOf LoginComponent
     */
    login() {
        this.logger.log("logged in");
        localStorage.setItem("access_token", "qsdqsddsdfdsf");
        this.router.navigate([this.authService.redirectUrl]);
    }

    /**
     * Event handle pour la touche entrée du clavier
     * @param {Number} keyCode
     */
    eventHandler(keyCode: number) {
        if (keyCode === 13) {
            this.login();
        }
    }

    /**
     * Arrêt du spinner
     */
    private stopRefreshing() {
        this.isRequesting = false;
    }
}
