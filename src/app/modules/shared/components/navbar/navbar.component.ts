"use strict";

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../core/services/auth.service";
import { ResourcesService } from "../../../core/services/resources.service";
import { MixinService } from "../../../core/services/mixin.service";

/**
 * Navbar Component
 *
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    providers: []
})
export class NavbarComponent implements OnInit {
    // props
    rsc: any;
    items: any[];
    isCollapsed: boolean = true;

    public toggled(open: boolean): void {
        console.log("Dropdown is now: ", open);
    }

    /**
     * Creates an instance of NavbarComponent.
     *
     * @param {Router} router
     * @param {SettingsService} settingsSvc
     * @param {ResourceService} resourceService
     * @param {MixinService} mixinService
     *
     * @memberOf NavbarComponent
     */
    constructor(private router: Router,
        private authService: AuthService,
        private resourcesService: ResourcesService,
        private mixinService: MixinService) {
        this.initItems();
    }

    /**
     * Initialisation du composant
     *
     *
     * @memberOf NavbarComponent
     */
    ngOnInit() {
    }

    /**
     * Initialise la liste des items du menu
     *
     *
     * @memberOf NavbarComponent
     */
    initItems() {
        this.rsc = this.resourcesService.get().menu;
        this.items = [
            {
                name: this.rsc.home.name,
                id: this.rsc.home.id,
                class: this.rsc.home.class,
                url: this.rsc.home.url,
            },
            {
                name: this.rsc.ui.name,
                id: this.rsc.ui.id,
                class: this.rsc.ui.class,
                url: this.rsc.ui.url,
            },
            {
                name: this.rsc.about.name,
                id: this.rsc.about.id,
                class: this.rsc.about.class,
                url: this.rsc.about.url,
            },
            {
                name: this.rsc.contact.name,
                id: this.rsc.contact.id,
                class: this.rsc.contact.class,
                url: this.rsc.contact.url,
            },
            {
                name: this.rsc.admin.name,
                id: this.rsc.admin.id,
                class: this.rsc.admin.class,
                subItems: this.rsc.admin.subItems
            }
        ];
    }

    /**
     * Logout app
     *
     *
     * @memberOf NavbarComponent
     */
    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("app_user");
        this.router.navigate(["/login"]);
    }
}
