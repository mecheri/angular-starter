import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

// Services
import { Constants } from './../../../core/services/constants.service';
import { MixinService } from "../../../core/services/mixin.service";
import { ResourcesService } from "../../../core/services/resources.service";
import { AuthService } from "../../../core/services/auth.service";

/**
 * Navbar Component
 * 
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    rsc: any;
    usrCtx: any;
    items: any[];

    /**
     * Creates an instance of NavbarComponent.
     * @param {Router} router 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} resourcesService 
     * @param {AuthService} authService 
     * @memberof NavbarComponent
     */
    constructor(
        private router: Router,
        private constants: Constants,
        private mixinService: MixinService,
        private resourcesService: ResourcesService,
        private authService: AuthService,
    ) {
        this.initItems();
    }

    /**
     * Initialisation du composant
     * 
     * @memberof NavbarComponent
     */
    ngOnInit() {
        this.usrCtx = this.resourcesService.getUserContext();
    }

    /**
     * Initialise la liste des items du menu
     * 
     * @memberof NavbarComponent
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
                name: this.rsc.user.name,
                id: this.rsc.user.id,
                class: this.rsc.user.class,
                url: this.rsc.user.url,
            },
            // {
            //     name: this.rsc.ui.name,
            //     id: this.rsc.ui.id,
            //     class: this.rsc.ui.class,
            //     url: this.rsc.ui.url,
            // },
            // {
            //     name: this.rsc.admin.name,
            //     id: this.rsc.admin.id,
            //     class: this.rsc.admin.class,
            //     subItems: this.rsc.admin.subItems
            // }
        ];
    }

    /**
     * Logout app
     * 
     * @memberof NavbarComponent
     */
    logout() {
        localStorage.removeItem(this.constants.ACCESS_TOKEN);
        localStorage.removeItem(this.constants.APP_USER);
        this.router.navigate(["/login"]);
    }
}
