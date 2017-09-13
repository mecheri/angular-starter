"use strict";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "access-denied",
    templateUrl: "./access-denied.component.html"
})
export class AccessDeniedComponent {

    /**
     * Creates an instance of PageNotFoundComponent.
     * @param {Router} router
     */
    constructor(private router: Router) { }

    /**
     * Rechargement de la page
     */
    back() {
        history.back();
    }

    /**
     * Redirection vers la page d"accueil"
     */
    home() {
        this.router.navigate(["/home"]);
    }
}
