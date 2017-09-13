"use strict";

import {Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "page-not-found",
    templateUrl: "./page-not-found.component.html"
})
export class PageNotFoundComponent {

    /**
     * Creates an instance of PageNotFoundComponent.
     * @param {Router} router
     */
    constructor(private router: Router) {}

    /**
     * Rechargement de la page
     */
    reload() {
      location.reload();
    }

    /**
     * Redirection vers la page d"accueil"
     */
    home() {
        this.router.navigate(["/home"]);
    }
}
