import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent
} from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

// Services
import { Spinner } from './../services/spinner.service';

/**
 * Application spinner Interceptor
 *
 * @export
 * @class SpinnerInterceptor
 * @implements {SpinnerInterceptor}
 */
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinner: Spinner) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        return next.handle(req)
            .pipe(finalize(() => this.spinner.hide()));
    }
}
