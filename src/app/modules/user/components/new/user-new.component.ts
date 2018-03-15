import { Component, ViewChild, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

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
 * User New Component
 * 
 * @export
 * @class UserNewComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './user-new.component.html'
})
export class UserNewComponent implements OnInit {
    private rsc: any;
    private bcItems: any[];
    private user: User;
    private creationForm: FormGroup;

    get username() { return this.creationForm.get('username'); }
    get password() { return this.creationForm.get('password'); }
    get email() { return this.creationForm.get('email'); }
    get firstname() { return this.creationForm.get('firstname'); }
    get lastname() { return this.creationForm.get('lastname'); }

    public isFormSaved: boolean;

    /**
     * Creates an instance of UserNewComponent.
     * @param {Router} router 
     * @param {FormBuilder} fb 
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} rscService 
     * @param {UserService} userService 
     * @memberof UserNewComponent
     */
    constructor(
        private router: Router,
        private fb: FormBuilder,
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
     * @memberof UserNewComponent
     */
    ngOnInit() {
        this.loadResources();
        this.loadForm();
    }

    /**
     * Load resources
     * 
     * @memberof UserNewComponent
     */
    loadResources() {
        this.rsc = this.rscService.get().pages.user;
        this.bcItems = [
            { label: 'Accueil', routerLink: '/home' },
            { label: 'Utilisateurs', routerLink: '/user' },
            { label: 'Création d\'un utilisateur' }
        ];
    }

    /**
     * Load form
     * 
     * @memberof UserNewComponent
     */
    loadForm() {
        if (this.creationForm) { this.creationForm.reset(); }
        this.creationForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
        });
    }

    /**
     * Cancel registration
     * 
     * @memberof RegisterComponent
     */
    cancel() {
        this.router.navigate(['user']);
    }

    /**
     * Save regisitration
     * 
     * @memberof RegisterComponent
     */
    save() {
        this.spinner.show();
        this.userService.createUser(this.user)
            .finally(() => this.spinner.hide())
            .subscribe(
                resp => {
                    this.isFormSaved = true;
                    this.notifService.success(null, 'Création effectuée avec succès', { timeOut: 3000 });
                    this.mixinService.startTimer(3000).then(() => this.router.navigate(['user', 'view', resp.id]));
                },
                error => this.notifService.error('Erreur', <any>error));
    }
}