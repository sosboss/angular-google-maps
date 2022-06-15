import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/info-window-manager";
const _c0 = ["*"];
let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmInfoWindow {
    constructor(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    ngOnInit() {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    }
    // tslint:enable: no-string-literal
    _registerEventListeners() {
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
            this.isOpen = false;
            this.infoWindowClose.emit();
        });
    }
    _updateOpenState() {
        this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open() { return this._infoWindowManager.open(this); }
    /**
     * Closes the info window.
     */
    close() {
        return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmInfoWindow-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() { this._infoWindowManager.deleteInfoWindow(this); }
}
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) { return new (t || AgmInfoWindow)(i0.ɵɵdirectiveInject(i1.InfoWindowManager), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AgmInfoWindow.ɵcmp = i0.ɵɵdefineComponent({ type: AgmInfoWindow, selectors: [["agm-info-window"]], inputs: { latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth", isOpen: "isOpen" }, outputs: { infoWindowClose: "infoWindowClose" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "agm-info-window-content"]], template: function AgmInfoWindow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmInfoWindow, [{
        type: Component,
        args: [{
                selector: 'agm-info-window',
                template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `,
            }]
    }], function () { return [{ type: i1.InfoWindowManager }, { type: i0.ElementRef }]; }, { latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], disableAutoPan: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], infoWindowClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9pbmZvLXdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7Ozs7QUFNL0gsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBUUgsTUFBTSxPQUFPLGFBQWE7SUEwRHhCLFlBQW9CLGtCQUFxQyxFQUFVLEdBQWU7UUFBOUQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFkbEY7O1dBRUc7UUFDTSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBQ08sb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUdqRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMsUUFBRyxHQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVtQyxDQUFDO0lBRXRGLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLFdBQVcsQ0FBQyxPQUFzQztRQUNoRCxJQUFJLENBQUMsSUFBSSxD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OEJBQ1A7UUFBQSxrQkFBWTtRQUNkLGlCQUFNOztrREFHRyxhQUFhO2NBUHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7OztHQUdUO2FBQ0Y7O2tCQU1FLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQVFMLEtBQUs7O2tCQU9MLEtBQUs7O2tCQWVMLEtBQUs7O2tCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG5cbmltcG9ydCB7IEFnbU1hcmtlciB9IGZyb20gJy4vbWFya2VyJztcblxubGV0IGluZm9XaW5kb3dJZCA9IDA7XG5cbi8qKlxuICogQWdtSW5mb1dpbmRvdyByZW5kZXJzIGEgaW5mbyB3aW5kb3cgaW5zaWRlIGEge0BsaW5rIEFnbU1hcmtlcn0gb3Igc3RhbmRhbG9uZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICAgIDxhZ20taW5mby13aW5kb3cgW2Rpc2FibGVBdXRvUGFuXT1cInRydWVcIj5cbiAqICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBjb250ZW50IG9mIHRoZSA8c3Ryb25nPmluZm8gd2luZG93PC9zdHJvbmc+XG4gKiAgICAgICAgPC9hZ20taW5mby13aW5kb3c+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FnbS1pbmZvLXdpbmRvdycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nYWdtLWluZm8td2luZG93LWNvbnRlbnQnPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21JbmZvV2luZG93IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICogQWdtTWFya2VyfSkuXG4gICAqL1xuICBASW5wdXQoKSBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBpbmZvIHdpbmRvdyAob25seSB1c2VmdWxsIGlmIHlvdSB1c2UgaXQgb3VzaWRlIG9mIGEge0BsaW5rXG4gICAqIEFnbU1hcmtlcn0pLlxuICAgKi9cbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYXV0by1wYW4gb24gb3Blbi4gQnkgZGVmYXVsdCwgdGhlIGluZm8gd2luZG93IHdpbGwgcGFuIHRoZSBtYXAgc28gdGhhdCBpdCBpcyBmdWxseVxuICAgKiB2aXNpYmxlIHdoZW4gaXQgb3BlbnMuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlQXV0b1BhbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlc1xuICAgKiBkaXNwbGF5aW5nIGluIGZyb250IG9mIEluZm9XaW5kb3dzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBJbmZvV2luZG93cyBhcmUgZGlzcGxheWVkXG4gICAqIGFjY29yZGluZyB0byB0aGVpciBsYXRpdHVkZSwgd2l0aCBJbmZvV2luZG93cyBvZiBsb3dlciBsYXRpdHVkZXMgYXBwZWFyaW5nIGluIGZyb250IG9mXG4gICAqIEluZm9XaW5kb3dzIGF0IGhpZ2hlciBsYXRpdHVkZXMuIEluZm9XaW5kb3dzIGFyZSBhbHdheXMgZGlzcGxheWVkIGluIGZyb250IG9mIG1hcmtlcnMuXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSB3aWR0aCBvZiB0aGUgaW5mb3dpbmRvdywgcmVnYXJkbGVzcyBvZiBjb250ZW50J3Mgd2lkdGguIFRoaXMgdmFsdWUgaXMgb25seSBjb25zaWRlcmVkXG4gICAqIGlmIGl0IGlzIHNldCBiZWZvcmUgYSBjYWxsIHRvIG9wZW4uIFRvIGNoYW5nZSB0aGUgbWF4aW11bSB3aWR0aCB3aGVuIGNoYW5naW5nIGNvbnRlbnQsIGNhbGxcbiAgICogY2xvc2UsIHVwZGF0ZSBtYXhXaWR0aCwgYW5kIHRoZW4gb3Blbi5cbiAgICovXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBtYXJrZXIgdGhhdCBpcyB0aGUgaG9zdCBvZiB0aGUgaW5mbyB3aW5kb3cgKGlmIGF2YWlsYWJsZSlcbiAgICovXG4gIGhvc3RNYXJrZXI6IEFnbU1hcmtlcjtcblxuICAvKipcbiAgICogSG9sZHMgdGhlIG5hdGl2ZSBlbGVtZW50IHRoYXQgaXMgdXNlZCBmb3IgdGhlIGluZm8gd2luZG93IGNvbnRlbnQuXG4gICAqL1xuICBjb250ZW50OiBOb2RlO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBvcGVuIHN0YXRlIGZvciB0aGUgSW5mb1dpbmRvdy4gWW91IGNhbiBhbHNvIGNhbGwgdGhlIG9wZW4oKSBhbmQgY2xvc2UoKSBtZXRob2RzLlxuICAgKi9cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGluZm8gd2luZG93IGlzIGNsb3NlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBpbmZvV2luZG93Q2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIHN0YXRpYyBfaW5mb1dpbmRvd09wdGlvbnNJbnB1dHM6IHN0cmluZ1tdID0gWydkaXNhYmxlQXV0b1BhbicsICdtYXhXaWR0aCddO1xuICBwcml2YXRlIF9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IChpbmZvV2luZG93SWQrKykudG9TdHJpbmcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvV2luZG93TWFuYWdlcjogSW5mb1dpbmRvd01hbmFnZXIsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1pbmZvLXdpbmRvdy1jb250ZW50Jyk7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuYWRkSW5mb1dpbmRvdyh0aGlzKTtcbiAgICB0aGlzLl9pbmZvV2luZG93QWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX3VwZGF0ZU9wZW5TdGF0ZSgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICBpZiAoIXRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pICYmIHR5cGVvZiB0aGlzLmxhdGl0dWRlID09PSAnbnVtYmVyJyAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5sb25naXR1ZGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRQb3NpdGlvbih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3pJbmRleCddKSB7XG4gICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRaSW5kZXgodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydpc09wZW4nXSkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BlblN0YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldEluZm9XaW5kb3dPcHRpb25zKGNoYW5nZXMpO1xuICB9XG4gIC8vIHRzbGludDplbmFibGU6IG5vLXN0cmluZy1saXRlcmFsXG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ2Nsb3NlY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU9wZW5TdGF0ZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA/IHRoaXMub3BlbigpIDogdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5mb1dpbmRvd09wdGlvbnMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICBjb25zdCBvcHRpb25zOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihcbiAgICAgICAgayA9PiBBZ21JbmZvV2luZG93Ll9pbmZvV2luZG93T3B0aW9uc0lucHV0cy5pbmRleE9mKGspICE9PSAtMSk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgdGhpcy5faW5mb1dpbmRvd01hbmFnZXIuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgaW5mbyB3aW5kb3cuXG4gICAqL1xuICBvcGVuKCk6IFByb21pc2U8dm9pZD4geyByZXR1cm4gdGhpcy5faW5mb1dpbmRvd01hbmFnZXIub3Blbih0aGlzKTsgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGluZm8gd2luZG93LlxuICAgKi9cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmNsb3NlKHRoaXMpLnRoZW4oKCkgPT4geyB0aGlzLmluZm9XaW5kb3dDbG9zZS5lbWl0KCk7IH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiAnQWdtSW5mb1dpbmRvdy0nICsgdGhpcy5faWQudG9TdHJpbmcoKTsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7IHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmRlbGV0ZUluZm9XaW5kb3codGhpcyk7IH1cbn1cbiJdfQ==