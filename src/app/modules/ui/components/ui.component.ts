"use strict";

import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";

// Services
import { NotificationsService } from "angular2-notifications";
import { MixinService } from "../../core/services/mixin.service";

// Mocks
import { CARS } from "../../../mocks/cars";

/**
 * Composant Accueil
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: "./ui.component.html",
    providers: [NotificationsService, MixinService]
})
export class UiComponent implements OnInit, AfterViewInit {
    cols: any[];
    cars: any[];
    bcItems: any[];
    date: Date;
    fr: any;
    isRequesting: boolean;

    /**
     * Creates an instance of UiComponent.
     * @param {Router} router
     * @param {Http} http
     * @param {NotificationsService} notifService
     * @param {MixinService} mixinService
     *
     * @memberOf UiComponent
     */
    constructor(private router: Router,
        private http: Http,
        private notifService: NotificationsService,
        public mixinService: MixinService) {
    }

    /**
     * Initialisation du composant.
     */
    ngOnInit() {
        this.cols = [
            { field: "vin", header: "Vin" },
            { field: "year", header: "Year" },
            { field: "brand", header: "Brand" },
            { field: "color", header: "Color" }
        ];

        this.cars = CARS;
        this.fr = {
            firstDayOfWeek: 0,
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Auo", "Sep", "Oct", "Nov", "Dec"]
        };
        this.bcItems = [
            { label: "Categories", },
            { label: "Sports", },
            { label: "Football", },
            { label: "Spain", },
            { label: "F.C. Barcelona", },
            { label: "Lionel Messi", url: "https://en.wikipedia.org/wiki/Lionel_Messi" },
        ];
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

    successMsg() {
        this.notifService.success(
            "Some Title",
            "Some Content",
            this.mixinService.notifOpts
        );
    }
    infoMsg() {
        this.notifService.info(
            "Some Title",
            "Some Content",
            this.mixinService.notifOpts
        );
    }
    warnMsg() {
        this.notifService.alert(
            "Some Title",
            "Some Content",
            this.mixinService.notifOpts
        );
    }
    errorMsg() {
        this.notifService.error(
            "Some Title",
            "Some Content",
            this.mixinService.notifOpts
        );
    }

    showSpinner() {
        this.isRequesting = true;
        this.http
            .get(`https://api.github.com/emojis`)
            .toPromise()
            .then(response => {
                setTimeout(function () {
                    this.stopRefreshing();
                    console.log("ok");
                }.bind(this), 3000);
            })
            .catch(error => {
                setTimeout(function () {
                    this.stopRefreshing();
                    console.log("ko");
                }.bind(this), 3000);
            });
    }

    onRowSelect(event: any) {
        console.log(event.data);
    }

    /**
     * Stop spinner
     *
     *
     * @memberOf HomeComponent
     */
    stopRefreshing() {
        this.isRequesting = false;
    }
}