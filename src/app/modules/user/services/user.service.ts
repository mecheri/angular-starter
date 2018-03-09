import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHeaderResponse } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Services
import { Constants } from './../../core/services/constants.service';
import { SettingsService } from './../../core/services/settings.service';
import { HttpResponseService } from './../../core/services/http-response.service';

// Models
import { User } from './../../core/models/user';

@Injectable()
export class UserService {

    /**
     * Creates an instance of UserService.
     * @param {HttpClient} http 
     * @param {Constants} constants 
     * @param {SettingsService} settingsService 
     * @param {HttpResponseService} httpRespService 
     * @memberof UserService
     */
    constructor(
        private http: HttpClient,
        private constants: Constants,
        private settingsService: SettingsService,
        private httpRespService: HttpResponseService
    ) { }

    /**
     * Get users
     * 
     * @returns {Observable<any>} 
     * @memberof UserService
     */
    getUsers(): Observable<any> {
        return this.http
            .get(`${this.settingsService.get().apiUrl}/api/User`)
            .map((resp) => resp as User[])
            .catch(this.httpRespService.handleError);
    }

    /**
     * Get user
     * 
     * @param {number} id 
     * @returns {Observable<any>} 
     * @memberof UserService
     */
    getUser(id: number): Observable<any> {
        return this.http
            .get(`${this.settingsService.get().apiUrl}/api/User/${id}`)
            .map((resp) => resp as User)
            .catch(this.httpRespService.handleError);
    }

    /**
     * Create user
     * 
     * @param {User} user 
     * @returns {Observable<any>} 
     * @memberof UserService
     */
    createUser(user: User): Observable<any> {
        const body = JSON.stringify(user);
        return this.http
            .post(`${this.settingsService.get().apiUrl}/api/User`, body)
            .catch(this.httpRespService.handleError);
    }

    /**
     * Update user
     * 
     * @param {User} user 
     * @returns {Observable<any>} 
     * @memberof UserService
     */
    updateUser(user: User): Observable<any> {
        const body = JSON.stringify(user);
        return this.http
            .put(`${this.settingsService.get().apiUrl}/api/User/${user.id}`, body)
            .catch(this.httpRespService.handleError);
    }

    /**
     * Delete user
     * 
     * @param {number} id 
     * @returns {Observable<any>} 
     * @memberof UserService
     */
    deleteUser(id: number): Observable<any> {
        return this.http
            .delete(`${this.settingsService.get().apiUrl}/api/User/${id}`)
            .catch(this.httpRespService.handleError);
    }
}