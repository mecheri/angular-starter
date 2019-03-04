import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent
} from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

/**
 * Application server error Interceptor
 *
 * @export
 * @class ServerErrorInterceptor
 * @implements {ServerErrorInterceptor}
 */
@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(retry(5));
    }
}
