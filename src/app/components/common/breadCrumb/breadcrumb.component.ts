"use strict";

import { Component, Input } from "@angular/core";
import { MenuItem } from "primeng/primeng";

/**
 * Breadcrumb Component
 * 
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
    selector: "breadcrumb",
    templateUrl: "./breadcrumb.component.html"
})
export class BreadCrumbComponent {

    private items: MenuItem[];

    @Input()
    public set data(bcItems: MenuItem[]) {
        if (bcItems !== undefined) {
            this.items = bcItems;
        }
    }

    /**
     * Creates an instance of BreadCrumbComponent.
     * 
     * 
     * @memberOf BreadCrumbComponent
     */
    constructor() { }
}
