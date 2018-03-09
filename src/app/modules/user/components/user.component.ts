import { Component, ViewChild, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

// RxJS
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/finally';

// Services
import { NotificationsService } from 'angular2-notifications';
import { Logger } from '../../core/services/logger.service';
import { Spinner } from '../../shared/services/spinner.service';
import { Constants } from './../../core/services/constants.service';
import { MixinService } from '../../core/services/mixin.service';
import { ResourcesService } from '../../core/services/resources.service';
import { UserService } from '../services/user.service';

// Models
import { User } from './../../core/models/user';

/**
 * User Component
 * 
 * @export
 * @class UserComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    private rsc: any;
    private bcItems: any[];
    private users: User[];

    /**
     * Creates an instance of UserComponent.
     * @param {Router} router 
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {MixinService} mixinService 
     * @param {UserService} userService 
     * @memberof UserComponent
     */
    constructor(
        private router: Router,
        private notifService: NotificationsService,
        private logger: Logger,
        private spinner: Spinner,
        private constants: Constants,
        private mixinService: MixinService,
        private rscService: ResourcesService,
        private userService: UserService
    ) {
    }

    /**
     *  Component init
     * 
     * @memberof UserComponent
     */
    ngOnInit() {
        this.loadResources();
        this.loadUsers();
    }

    /**
     * Load resources
     * 
     * @memberof UserViewComponent
     */
    loadResources() {
        this.rsc = this.rscService.get().pages.user;
        this.bcItems = [
            { label: 'Accueil', routerLink: '/home' },
            { label: 'Utilisateurs', }
        ];
    }

    /**
     * Load users
     * 
     * @memberof UserComponent
     */
    loadUsers() {
        this.spinner.show();
        this.userService.getUsers()
            .finally(() => this.spinner.hide())
            .subscribe(
                data => this.users = data,
                error => this.notifService.error('Erreur', <any>error));
    }

    /**
     * add user
     * 
     * @memberof UserComponent
     */
    add() {
        this.router.navigate(['user', 'new']);
    }

    /**
     * view user
     * 
     * @param {User} user 
     * @memberof UserComponent
     */
    view(user: User) {
        this.router.navigate(['user', 'view', user.id]);
    }

    /**
     * edit user
     * 
     * @param {User} user 
     * @memberof UserComponent
     */
    edit(user: User) {
        this.router.navigate(['user', 'edit', user.id]);
    }
}