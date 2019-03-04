import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    /**
     * Creates an instance of HttpService.
     * @param {HttpClient} httpClient
     * @memberof HttpService
     */
    constructor(
        private httpClient: HttpClient,
    ) { }

    get(url: string, options?: any): Observable<ArrayBuffer> {
        return this.httpClient.get(url, options);
    }

    post(url: string, body: any, options?: any): Observable<ArrayBuffer> {
        return this.httpClient.post(url, body, options);
    }

    put(url: string, body: any, options?: any): Observable<ArrayBuffer> {
        return this.httpClient.put(url, body, options);
    }

    delete(url: string, options?: any): Observable<ArrayBuffer> {
        return this.httpClient.delete(url, options);
    }
}