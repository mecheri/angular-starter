import { Component, ViewChild, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// RxJS
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/finally';

// Services
import { NotificationsService } from 'angular2-notifications';
import { Logger } from '../../../core/services/logger.service';
import { Spinner } from '../../../shared/services/spinner.service';
import { Constants } from './../../../core/services/constants.service';
import { MixinService } from '../../../core/services/mixin.service';
import { ResourcesService } from '../../../core/services/resources.service';
import { UserService } from '../../services/user.service';

// Models
import { User } from './../../../core/models/user';

/**
 * User View Component
 * 
 * @export
 * @class UserViewComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './user-view.component.html'
})
export class UserViewComponent implements OnInit {
    private rsc: any;
    private bcItems: any[];
    private user: User;
    private userId: number;
    private subscription: any;

    /**
     * Creates an instance of UserViewComponent.
     * @param {Router} router 
     * @param {ActivatedRoute} route 
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} rscService 
     * @param {UserService} userService 
     * @memberof UserViewComponent
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private notifService: NotificationsService,
        private logger: Logger,
        private spinner: Spinner,
        private constants: Constants,
        private mixinService: MixinService,
        private rscService: ResourcesService,
        private userService: UserService
    ) {
        this.user = new User();
    }

    /**
     * Component init
     * 
     * @memberof UserViewComponent
     */
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => this.userId = +params['id']);
        this.loadResources();
        this.loadUser();
    }

    /**
     * Component destroy
     * 
     * @memberof UserViewComponent
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
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
            { label: 'Utilisateurs', routerLink: '/user' },
            { label: 'Détail d\'un utilisateur' }
        ];
    }

    /**
     * Load user
     * 
     * @memberof UserViewComponent
     */
    loadUser() {
        this.spinner.show();
        this.userService.getUser(this.userId)
            .finally(() => this.spinner.hide())
            .subscribe(
                data => this.user = data,
                error => this.notifService.error('Erreur', <any>error));
    }

    /**
     * Back to users
     * 
     * @memberof UserViewComponent
     */
    cancel() {
        this.router.navigate(['user']);
    }

    /**
     *  edit user
     * 
     * @memberof UserViewComponent
     */
    edit() {
        this.router.navigate(['user', 'edit', this.userId]);
    }
}