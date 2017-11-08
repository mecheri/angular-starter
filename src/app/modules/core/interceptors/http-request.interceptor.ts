import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpHeaders, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Application Http Requests Interceptor
 *
 * @export
 * @class HttpRequestInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token = localStorage.getItem('access_token');
        // if (token) {
        //     req = req.clone({ headers: req.headers.set('X-JWT-TOKEN', token) });
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json; charset=utf-8') });
        // }

        return next.handle(req);
    }
}