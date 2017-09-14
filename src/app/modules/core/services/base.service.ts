import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

/**
 * Application Base Service
 *
 * @export
 * @class BaseService
 */
@Injectable()
export class BaseService {
    headers: Headers;

    /**
     * Creates an instance of BaseService.
     *
     * @memberOf BaseService
     */
    constructor() {
        this.headers = new Headers();
        this.headers.append("X-JWT-TOKEN", sessionStorage.getItem("access_token"));
        this.headers.append("Content-Type", "application/json; charset=utf-8");
    }
}