import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * Spinner state Interface
 *
 * @export
 * @interface SpinnerState
 */
export interface SpinnerState {
  show: boolean;
}

/**
 * Application Spinner Service
 *
 * @export
 * @class Spinner
 */
@Injectable()
export class Spinner {
  private spinnerSubject = new Subject<SpinnerState>();

  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  show() {
    console.log('Spinner fires');
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    console.log('Spinner unfires');
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }
}