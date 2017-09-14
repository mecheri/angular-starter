"use strict";

import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";

// Services
import { Logger } from "../../core/services/logger.service";
import { MixinService } from "../../core/services/mixin.service";
import { NotificationsService } from "angular2-notifications";

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
    providers: []
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
     * @param {HttpClient} http
     * @param {Logger} logger
     * @param {NotificationsService} notifService
     * @param {MixinService} mixinService
     * @memberof UiComponent
     */
    constructor(private router: Router,
        private http: HttpClient,
        private logger: Logger,
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
            .then((resp: HttpResponse<any>) => {
                setTimeout(() => {
                    this.stopRefreshing();
                    this.logger.log('ok');
                }, 3000);
            })
            .catch(err => {
                this.stopRefreshing();
                this.logger.error('ko');
            });
    }

    onRowSelect(event: any) {
        this.logger.log(event.data);
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