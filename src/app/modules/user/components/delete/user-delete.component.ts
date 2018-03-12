import { Input, Output, Component, ViewChild, OnInit, AfterViewInit, HostBinding, EventEmitter } from '@angular/core';

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
 * User Delete Component
 * 
 * @export
 * @class UserDeleteComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-user-delete-modal',
    templateUrl: './user-delete.component.html'
})
export class UserDeleteComponent implements OnInit {
    private rsc: any;
    @Input('data') user: User;
    @Input() display: boolean;
    @Output() onDelete = new EventEmitter<void>();
    @Output() onCancel = new EventEmitter<void>();


    /**
     * Creates an instance of UserDeleteComponent.
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} rscService 
     * @param {UserService} userService 
     * @memberof UserDeleteComponent
     */
    constructor(
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
     * Component init
     * 
     * @memberof UserDeleteComponent
     */
    ngOnInit() {
        this.loadResources();
    }

    /**
     * Load resources
     * 
     * @memberof UserDeleteComponent
     */
    loadResources() {
        this.rsc = this.rscService.get().pages.user;
    }

    /**
     * cancel delete
     * 
     * @memberof UserDeleteComponent
     */
    cancel() {
        this.onCancel.emit();
    }

    /**
     * Delete user
     * 
     * @memberof UserDeleteComponent
     */
    delete() {
        this.spinner.show();
        this.userService.deleteUser(this.user.id)
            .finally(() => this.spinner.hide())
            .subscribe(
                resp => {
                    this.notifService.success(null, 'Suppression effectuée avec succès', { timeOut: 3000 });
                    this.mixinService.startTimer(3000).then(() => this.onDelete.emit());
                },
                error => this.notifService.error('Erreur', <any>error));
    }
}