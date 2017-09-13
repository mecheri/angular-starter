"use strict";

import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router } from "@angular/router";

/**
 * Composant Accueil
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: "./home.component.html",
    providers: []
})
export class HomeComponent implements OnInit, AfterViewInit {

    /**
     * Creates an instance of HomeComponent.
     *
     * @param {Router} router
     *
     * @memberOf HomeComponent
     */
    constructor(private router: Router,
                private http: Http) {
    }

    /**
     * Initialisation du composant.
     */
    ngOnInit() {
    }

    /**
     * Initialisation de la vue.
     */
    ngAfterViewInit() {
    }

    /**
     * Chargement des ressources.
     */
    loadResources() {
    }
}