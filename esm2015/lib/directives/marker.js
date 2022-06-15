import { ContentChildren, Directive, EventEmitter, forwardRef, Input, Output, QueryList } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FitBoundsAccessor } from '../services/fit-bounds';
import { AgmInfoWindow } from './info-window';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/marker-manager";
let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
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
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmMarker {
    constructor(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         */
        this.animationChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */
        this.markerDblClick = new EventEmitter();
        /**
         * This event is fired when the user rightclicks on the marker.
         */
        this.markerRightClick = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the marker.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new EventEmitter();
        /** @internal */
        this.infoWindow = new QueryList();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new ReplaySubject(1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    ngAfterContentInit() {
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(marker => {
            marker.hostMarker = this;
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this._fitBoundsDetails$.asObservable();
    }
    _updateFitBoundsDetails() {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    }
    _addEventListeners() {
        const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
            if (this.openInfoWindow) {
                this.infoWindow.forEach(infoWindow => infoWindow.open());
            }
            this.markerClick.emit(this);
        });
        this._observableSubscriptions.push(cs);
        const dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
            this.markerDblClick.emit(null);
        });
        this._observableSubscriptions.push(dcs);
        const rc = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
            this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        const ds = this._markerManager.createEventObservable('dragstart', this)
            .subscribe(e => this.dragStart.emit(e));
        this._observableSubscriptions.push(ds);
        const d = this._markerManager.createEventObservable('drag', this)
            .subscribe(e => this.drag.emit(e));
        this._observableSubscriptions.push(d);
        const de = this._markerManager.createEventObservable('dragend', this)
            .subscribe(e => this.dragEnd.emit(e));
        this._observableSubscriptions.push(de);
        const mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(e => this.mouseOver.emit(e));
        this._observableSubscriptions.push(mover);
        const mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(e => this.mouseOut.emit(e));
        this._observableSubscriptions.push(mout);
        const anChng = this._markerManager.createEventObservable('animation_changed', this)
            .subscribe(() => {
            this.animationChange.emit(this.animation);
        });
        this._observableSubscriptions.push(anChng);
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmMarker-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
}
AgmMarker.ɵfac = function AgmMarker_Factory(t) { return new (t || AgmMarker)(i0.ɵɵdirectiveInject(i1.MarkerManager)); };
AgmMarker.ɵdir = i0.ɵɵdefineDirective({ type: AgmMarker, selectors: [["agm-marker"]], contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, AgmInfoWindow, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.infoWindow = _t);
    } }, inputs: { latitude: "latitude", longitude: "longitude", title: "title", label: "label", draggable: ["markerDraggable", "draggable"], iconUrl: "iconUrl", visible: "visible", openInfoWindow: "openInfoWindow", opacity: "opacity", zIndex: "zIndex", clickable: ["markerClickable", "clickable"], animation: "animation" }, outputs: { animationChange: "animationChange", markerClick: "markerClick", markerDblClick: "markerDblClick", markerRightClick: "markerRightClick", dragStart: "dragStart", drag: "drag", dragEnd: "dragEnd", mouseOver: "mouseOver", mouseOut: "mouseOut" }, features: [i0.ɵɵProvidersFeature([
            { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmMarker) },
        ]), i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmMarker, [{
        type: Directive,
        args: [{
                selector: 'agm-marker',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmMarker) },
                ],
            }]
    }], function () { return [{ type: i1.MarkerManager }]; }, { latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], title: [{
            type: Input
        }], label: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['markerDraggable']
        }], iconUrl: [{
            type: Input
        }], visible: [{
            type: Input
        }], openInfoWindow: [{
            type: Input
        }], opacity: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], clickable: [{
            type: Input,
            args: ['markerClickable']
        }], animation: [{
            type: Input
        }], animationChange: [{
            type: Output
        }], markerClick: [{
            type: Output
        }], markerDblClick: [{
            type: Output
        }], markerRightClick: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], drag: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], mouseOver: [{
            type: Output
        }], mouseOut: [{
            type: Output
        }], infoWindow: [{
            type: ContentChildren,
            args: [AgmInfoWindow]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvbWFya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDckssT0FBTyxFQUFjLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFvQixNQUFNLHdCQUF3QixDQUFDO0FBRTdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUU5QyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFPSCxNQUFNLE9BQU8sU0FBUztJQTBIcEIsWUFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFyR2pEOztXQUVHO1FBQ0gsMkNBQTJDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPNUM7O1dBRUc7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXhCOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFL0I7O1dBRUc7UUFDTSxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXJCOzs7OztXQUtHO1FBQ00sV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVwQjs7V0FFRztRQUNILDJDQUEyQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBUTNDOztXQUVHO1FBQ08sb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBc0MsQ0FBQztRQUVuRjs7V0FFRztRQUNPLGdCQUFXLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFL0U7O1dBRUc7UUFDTyxtQkFBYyxHQUE0QixJQUFJLFlBQVksRUFB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Q3RCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2lCQUN6RTthQUNGOztrQkFLRSxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFNTCxLQUFLO21CQUFDLGlCQUFpQjs7a0JBS3ZCLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQU1MLEtBQUs7bUJBQUMsaUJBQWlCOztrQkFNdkIsS0FBSzs7a0JBS0wsTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBTU4sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBR04sZUFBZTttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZpdEJvdW5kc0FjY2Vzc29yLCBGaXRCb3VuZHNEZXRhaWxzIH0gZnJvbSAnLi4vc2VydmljZXMvZml0LWJvdW5kcyc7XG5pbXBvcnQgeyBNYXJrZXJNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vaW5mby13aW5kb3cnO1xuXG5sZXQgbWFya2VySWQgPSAwO1xuXG4vKipcbiAqIEFnbU1hcmtlciByZW5kZXJzIGEgbWFwIG1hcmtlciBpbnNpZGUgYSB7QGxpbmsgQWdtTWFwfS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICA8L2FnbS1tYXJrZXI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFya2VyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBGaXRCb3VuZHNBY2Nlc3NvciwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWdtTWFya2VyKSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXJrZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgRml0Qm91bmRzQWNjZXNzb3Ige1xuICAvKipcbiAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBASW5wdXQoKSBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBASW5wdXQoKSBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgKGEgc2luZ2xlIHVwcGVyY2FzZSBjaGFyYWN0ZXIpIGZvciB0aGUgbWFya2VyLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IGdvb2dsZS5tYXBzLk1hcmtlckxhYmVsO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWFya2VyIGNhbiBiZSBkcmFnZ2VkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21hcmtlckRyYWdnYWJsZScpIGRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJY29uICh0aGUgVVJMIG9mIHRoZSBpbWFnZSkgZm9yIHRoZSBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgQElucHV0KCkgaWNvblVybDogc3RyaW5nIHwgZ29vZ2xlLm1hcHMuSWNvbiB8IGdvb2dsZS5tYXBzLlN5bWJvbDtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAqL1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGNoaWxkIGluZm8gd2luZG93IHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgKi9cbiAgQElucHV0KCkgb3BlbkluZm9XaW5kb3cgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWFya2VyJ3Mgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgKi9cbiAgQElucHV0KCkgb3BhY2l0eSA9IDE7XG5cbiAgLyoqXG4gICAqIEFsbCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlcyBkaXNwbGF5aW5nIGluXG4gICAqIGZyb250IG9mIG1hcmtlcnMgd2l0aCBsb3dlciB2YWx1ZXMuIEJ5IGRlZmF1bHQsIG1hcmtlcnMgYXJlIGRpc3BsYXllZCBhY2NvcmRpbmcgdG8gdGhlaXJcbiAgICogdmVydGljYWwgcG9zaXRpb24gb24gc2NyZWVuLCB3aXRoIGxvd2VyIG1hcmtlcnMgYXBwZWFyaW5nIGluIGZyb250IG9mIG1hcmtlcnMgZnVydGhlciB1cCB0aGVcbiAgICogc2NyZWVuLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4ID0gMTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBjYW4gYmUgY2xpY2tlZC4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21hcmtlckNsaWNrYWJsZScpIGNsaWNrYWJsZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoaWNoIGFuaW1hdGlvbiB0byBwbGF5IHdoZW4gbWFya2VyIGlzIGFkZGVkIHRvIGEgbWFwLlxuICAgKiBUaGlzIGNhbiBiZSAnQk9VTkNFJyBvciAnRFJPUCdcbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjoga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLkFuaW1hdGlvbjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXJrZXIncyBhbmltYXRpb24gcHJvcGVydHkgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBhbmltYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5BbmltYXRpb24+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXJrZXJDbGljazogRXZlbnRFbWl0dGVyPEFnbU1hcmtlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFnbU1hcmtlcj4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0d2ljZSBvbiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcmtlckRibENsaWNrOiBFdmVudEVtaXR0ZXI8QWdtTWFya2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8QWdtTWFya2VyPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgcmlnaHRjbGlja3Mgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXJrZXJSaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBtYXJrZXIuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGRyYWc6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG92ZXIgdGhlIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIG1vdXNlcyBvdXRzaWRlIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKiogQGludGVybmFsICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQWdtSW5mb1dpbmRvdykgaW5mb1dpbmRvdzogUXVlcnlMaXN0PEFnbUluZm9XaW5kb3c+ID0gbmV3IFF1ZXJ5TGlzdDxBZ21JbmZvV2luZG93PigpO1xuXG4gIHByaXZhdGUgX21hcmtlckFkZGVkVG9NYW5nZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9maXRCb3VuZHNEZXRhaWxzJDogUmVwbGF5U3ViamVjdDxGaXRCb3VuZHNEZXRhaWxzPiA9IG5ldyBSZXBsYXlTdWJqZWN0PEZpdEJvdW5kc0RldGFpbHM+KDEpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hcmtlck1hbmFnZXI6IE1hcmtlck1hbmFnZXIpIHsgdGhpcy5faWQgPSAobWFya2VySWQrKykudG9TdHJpbmcoKTsgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVJbmZvV2luZG93VXBkYXRlKCk7XG4gICAgdGhpcy5pbmZvV2luZG93LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5pbmZvV2luZG93Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm8gbW9yZSB0aGFuIG9uZSBpbmZvIHdpbmRvdy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbmZvV2luZG93LmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIG1hcmtlci5ob3N0TWFya2VyID0gdGhpcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSBOdW1iZXIodGhpcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5sb25naXR1ZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxvbmdpdHVkZSA9IE51bWJlcih0aGlzLmxvbmdpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX21hcmtlckFkZGVkVG9NYW5nZXIpIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuYWRkTWFya2VyKHRoaXMpO1xuICAgICAgdGhpcy5fdXBkYXRlRml0Qm91bmRzRGV0YWlscygpO1xuICAgICAgdGhpcy5fbWFya2VyQWRkZWRUb01hbmdlciA9IHRydWU7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVNYXJrZXJQb3NpdGlvbih0aGlzKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUZpdEJvdW5kc0RldGFpbHMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3RpdGxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVGl0bGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydsYWJlbCddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUxhYmVsKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZHJhZ2dhYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlRHJhZ2dhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snaWNvblVybCddKSB7XG4gICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUljb24odGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydvcGFjaXR5J10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlT3BhY2l0eSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVWaXNpYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snekluZGV4J10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlWkluZGV4KHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snY2xpY2thYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlQ2xpY2thYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYW5pbWF0aW9uJ10pIHtcbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlQW5pbWF0aW9uKHRoaXMpO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuXG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGdldEZpdEJvdW5kc0RldGFpbHMkKCk6IE9ic2VydmFibGU8Rml0Qm91bmRzRGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLl9maXRCb3VuZHNEZXRhaWxzJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBkYXRlRml0Qm91bmRzRGV0YWlscygpIHtcbiAgICB0aGlzLl9maXRCb3VuZHNEZXRhaWxzJC5uZXh0KHsgbGF0TG5nOiB7IGxhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZSB9IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3MgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3BlbkluZm9XaW5kb3cpIHtcbiAgICAgICAgdGhpcy5pbmZvV2luZG93LmZvckVhY2goaW5mb1dpbmRvdyA9PiBpbmZvV2luZG93Lm9wZW4oKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcmtlckNsaWNrLmVtaXQodGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChjcyk7XG5cbiAgICBjb25zdCBkY3MgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnZGJsY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJEYmxDbGljay5lbWl0KG51bGwpO1xuICAgIH0pO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2goZGNzKTtcblxuICAgIGNvbnN0IHJjID0gdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ3JpZ2h0Y2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJSaWdodENsaWNrLmVtaXQobnVsbCk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChyYyk7XG5cbiAgICBjb25zdCBkcyA9XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCdkcmFnc3RhcnQnLCB0aGlzKVxuICAgICAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZSkpO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2goZHMpO1xuXG4gICAgY29uc3QgZCA9XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCdkcmFnJywgdGhpcylcbiAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5kcmFnLmVtaXQoZSkpO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2goZCk7XG5cbiAgICBjb25zdCBkZSA9XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCdkcmFnZW5kJywgdGhpcylcbiAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5kcmFnRW5kLmVtaXQoZSkpO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2goZGUpO1xuXG4gICAgY29uc3QgbW92ZXIgPVxuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PignbW91c2VvdmVyJywgdGhpcylcbiAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU92ZXIuZW1pdChlKSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChtb3Zlcik7XG5cbiAgICBjb25zdCBtb3V0ID1cbiAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oJ21vdXNlb3V0JywgdGhpcylcbiAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5tb3VzZU91dC5lbWl0KGUpKTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdXQpO1xuXG4gICAgY29uc3QgYW5DaG5nID1cbiAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPHZvaWQ+KCdhbmltYXRpb25fY2hhbmdlZCcsIHRoaXMpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQ2hhbmdlLmVtaXQodGhpcy5hbmltYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKGFuQ2huZyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuICdBZ21NYXJrZXItJyArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX21hcmtlck1hbmFnZXIuZGVsZXRlTWFya2VyKHRoaXMpO1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==