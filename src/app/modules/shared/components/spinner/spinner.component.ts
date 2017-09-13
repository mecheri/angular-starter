import {Component, Input, ChangeDetectorRef, OnDestroy} from "@angular/core";

@Component({
    selector: "spinner",
    templateUrl: "./spinner.component.html"
})
export class SpinnerComponent implements OnDestroy {
    // props 
    currentTimeout: any;
    isDelayedRunning: boolean = false;

    // props special
    @Input() public delay: number = 300;
    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            this.ref.detectChanges();
            return;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    /**
     * Creates an instance of SpinnerComponent.
     * 
     * @param {ChangeDetectorRef} ref
     * 
     * @memberOf SpinnerComponent
     */
    constructor(private ref: ChangeDetectorRef) {}

    /**
     * Supprime le timeout
     * 
     * 
     * @memberOf SpinnerComponent
     */
    cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    /**
     * ngOnDestroy
     * 
     * @returns {*}
     * 
     * @memberOf SpinnerComponent
     */
    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}