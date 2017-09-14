import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Logger } from './../../../core/services/logger.service';
import { SpinnerState, Spinner } from './../../services/spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(
    private logger: Logger,
    private spinner: Spinner
  ) { }

  ngOnInit() {
    this.spinnerStateChanged = this.spinner.spinnerState
      .subscribe((state: SpinnerState) => {
        this.visible = state.show;
        this.logger.log(`visible=${this.visible}`);
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}