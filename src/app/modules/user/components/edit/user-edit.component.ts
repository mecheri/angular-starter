import { Component, ViewChild, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
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
 * User Edit Component
 * 
 * @export
 * @class UserEditComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    private rsc: any;
    private bcItems: any[];
    private user: User;
    private userId: number;
    private subscription: any;
    private editForm: FormGroup;

    get username() { return this.editForm.get('username'); }
    get password() { return this.editForm.get('password'); }
    get email() { return this.editForm.get('email'); }
    get firstname() { return this.editForm.get('firstname'); }
    get lastname() { return this.editForm.get('lastname'); }

    public isFormSaved: boolean;

    /**
     * Creates an instance of UserEditComponent.
     * @param {Router} router 
     * @param {ActivatedRoute} route 
     * @param {FormBuilder} fb 
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} rscService 
     * @param {UserService} userService 
     * @memberof UserEditComponent
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
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
     * @memberof UserEditComponent
     */
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => this.userId = +params['id']);
        this.loadResources();
        this.loadUser();
        this.loadForm();
    }

    /**
     * Component destroy
     * 
     * @memberof UserEditComponent
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /**
     * Load resources
     * 
     * @memberof UserEditComponent
     */
    loadResources() {
        this.rsc = this.rscService.get().pages.user;
        this.bcItems = [
            { label: 'Accueil', routerLink: '/home' },
            { label: 'Utilisateurs', routerLink: '/user' },
            { label: 'Modification d\'un utilisateur' }
        ];
    }

    /**
     * Load form
     * 
     * @memberof UserNewComponent
     */
    loadForm() {
        if (this.editForm) { this.editForm.reset(); }
        this.editForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
        });
    }

    /**
     * Load user
     * 
     * @memberof UserComponent
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
     * Cancel edit
     * 
     * @memberof UserNewComponent
     */
    cancel() {
        this.router.navigate(['user']);
    }

    /**
     * Save edit
     * 
     * @memberof UserNewComponent
     */
    save() {
        this.spinner.show();
        this.userService.updateUser(this.user)
            .finally(() => this.spinner.hide())
            .subscribe(
                resp => {
                    this.isFormSaved = true;
                    this.notifService.success(null, 'Modification effectuée avec succès', { timeOut: 3000 });
                    this.mixinService.startTimer(3000).then(() => this.router.navigate(['user', 'view', resp.id]));
                },
                error => this.notifService.error('Erreur', <any>error));
    }
}