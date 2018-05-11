'use strict';

import { Component, ViewChild, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

// Services
import { Logger } from '../../core/services/logger.service';
import { Spinner } from '../../shared/services/spinner.service';
import { MixinService } from '../../core/services/mixin.service';
import { NotificationsService } from 'angular2-notifications';
import { UiService } from '../services/ui.service';

// Mocks
import { CARS } from '../mocks/cars';

/**
 * Composant Accueil
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './ui.component.html'
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
     * @param {NotificationsService} notifService
     * @param {Logger} logger
     * @param {Spinner} spinner
     * @param {MixinService} mixinService
     * @param {UiService} uiService
     * @memberof UiComponent
     */
    constructor(
        private router: Router,
        private notifService: NotificationsService,
        private logger: Logger,
        private spinner: Spinner,
        private mixinService: MixinService,
        private uiService: UiService) {
    }

    /**
     * Initialisation du composant.
     */
    ngOnInit() {
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cars = CARS;
        this.fr = {
            firstDayOfWeek: 0,
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Auo', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        this.bcItems = [
            { label: 'Categories', },
            { label: 'Sports', },
            { label: 'Football', },
            { label: 'Spain', },
            { label: 'F.C. Barcelona', },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
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
            'Some Title',
            'Some Content',
            this.mixinService.notifOpts
        );
    }
    infoMsg() {
        this.notifService.info(
            'Some Title',
            'Some Content',
            this.mixinService.notifOpts
        );
    }
    warnMsg() {
        this.notifService.alert(
            'Some Title',
            'Some Content',
            this.mixinService.notifOpts
        );
    }
    errorMsg() {
        this.notifService.error(
            'Some Title',
            'Some Content',
            this.mixinService.notifOpts
        );
    }

    showSpinner() {
        this.spinner.show();
        this.uiService
            .call()
            .finally(() => this.spinner.hide())
            .subscribe(
                data => {
                    this.logger.log(data);
                },
                error => {
                    this.notifService.error(
                        'Error',
                        error,
                        this.mixinService.notifOpts
                    );
                }
            );
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