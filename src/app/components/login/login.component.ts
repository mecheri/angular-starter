"use strict";

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { Auth } from "./../../models/auth";

@Component({
    templateUrl: "./login.component.html",
    providers: [AuthService]
})
export class LoginComponent {
    // props
    message: string;
    isRequesting: boolean;
    model: Auth = new Auth();

    /**
     * Creates an instance of LoginComponent.
     * 
     * @param {Router} router
     * @param {AuthService} authService
     * @param {ResourceService} resourceService
     * 
     * @memberOf LoginComponent
     */
    constructor(private router: Router,
        private authService: AuthService) { }

    /**
     * Login to application.
     * 
     * 
     * @memberOf LoginComponent
     */
    login() {
        console.log("logged in");
        sessionStorage.setItem("access_token", "qsdqsddsdfdsf");
        this.router.navigate(["/ui"]);
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

    logout() {
        // sessionStorage.removeItem("access_token");
        // sessionStorage.removeItem("app_user");
    }
}
