import { Directive, Input, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/fit-bounds";
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
export class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new Subject();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), takeUntil(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
}
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) { return new (t || AgmFitBounds)(i0.ɵɵdirectiveInject(i1.FitBoundsAccessor, 2), i0.ɵɵdirectiveInject(i1.FitBoundsService)); };
AgmFitBounds.ɵdir = i0.ɵɵdefineDirective({ type: AgmFitBounds, selectors: [["", "agmFitBounds", ""]], inputs: { agmFitBounds: "agmFitBounds" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmFitBounds, [{
        type: Directive,
        args: [{
                selector: '[agmFitBounds]',
            }]
    }], function () { return [{ type: i1.FitBoundsAccessor, decorators: [{
                type: Self
            }] }, { type: i1.FitBoundsService }]; }, { agmFitBounds: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSWpFOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFDMkIsa0JBQXFDLEVBQzdDLGlCQUFtQztRQUQzQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFYdEQ7OztXQUdHO1FBQ00saUJBQVksR0FBRyxJQUFJLENBQUM7UUFFckIsZ0JBQVcsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNqRCw0QkFBdUIsR0FBNEIsSUFBSSxDQUFDO0lBSzdELENBQUM7SUFFSjs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUNILG9CQUFvQixDQUNsQixDQUFDLENBQW1CLEVBQUUsQ0FBbUIsRUFBRSxFQUFFLENBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNqRSxFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzVCO2FBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDTSxhQUFhLENBQUMsbUJBQXNDO1FBQzFELDJFQUEyRTtRQUMzRSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdFLGtGQUFrRjtZQUNsRiwyRUFBMkU7U0FDNUU7UUFFRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDOzt3RUF6RVUsWUFBWTtpREFBWixZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7O3NCQVlJLElBQUk7O2tCQU5OLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGaXRCb3VuZHNBY2Nlc3NvciwgRml0Qm91bmRzRGV0YWlscywgRml0Qm91bmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xuXG4vKipcbiAqIEFkZHMgdGhlIGdpdmVuIGRpcmVjdGl2ZSB0byB0aGUgYXV0byBmaXQgYm91bmRzIGZlYXR1cmUgd2hlbiB0aGUgdmFsdWUgaXMgdHJ1ZS5cbiAqIFRvIG1ha2UgaXQgd29yayB3aXRoIHlvdSBjdXN0b20gQUdNIGNvbXBvbmVudCwgeW91IGFsc28gaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHtAbGluayBGaXRCb3VuZHNBY2Nlc3Nvcn0gYWJzdHJhY3QgY2xhc3MuXG4gKiBAZXhhbXBsZVxuICogPGFnbS1tYXJrZXIgW2FnbUZpdEJvdW5kc109XCJ0cnVlXCI+PC9hZ20tbWFya2VyPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWdtRml0Qm91bmRzXScsXG59KVxuZXhwb3J0IGNsYXNzIEFnbUZpdEJvdW5kcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSWYgdGhlIHZhbHVlIGlzIHRydWUsIHRoZSBlbGVtZW50IGdldHMgYWRkZWQgdG8gdGhlIGJvdW5kcyBvZiB0aGUgbWFwLlxuICAgKiBEZWZhdWx0OiB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgYWdtRml0Qm91bmRzID0gdHJ1ZTtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfbGF0ZXN0Rml0Qm91bmRzRGV0YWlsczogRml0Qm91bmRzRGV0YWlscyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBfZml0Qm91bmRzQWNjZXNzb3I6IEZpdEJvdW5kc0FjY2Vzc29yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc1NlcnZpY2U6IEZpdEJvdW5kc1NlcnZpY2UsXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVCb3VuZHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2ZpdEJvdW5kc0FjY2Vzc29yXG4gICAgICAuZ2V0Rml0Qm91bmRzRGV0YWlscyQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgICAgICh4OiBGaXRCb3VuZHNEZXRhaWxzLCB5OiBGaXRCb3VuZHNEZXRhaWxzKSA9PlxuICAgICAgICAgICAgeC5sYXRMbmcubGF0ID09PSB5LmxhdExuZy5sYXQgJiYgeC5sYXRMbmcubG5nID09PSB5LmxhdExuZy5sbmcsXG4gICAgICAgICksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGV0YWlscyA9PiB0aGlzLl91cGRhdGVCb3VuZHMoZGV0YWlscykpO1xuICB9XG5cbiAgLypcbiAgIEVpdGhlciB0aGUgbG9jYXRpb24gY2hhbmdlZCwgb3IgdmlzaWJsZSBzdGF0dXMgY2hhbmdlZC5cbiAgIFBvc3NpYmxlIHN0YXRlIGNoYW5nZXMgYXJlXG4gICBpbnZpc2libGUgLT4gdmlzaWJsZVxuICAgdmlzaWJsZSAtPiBpbnZpc2libGVcbiAgIHZpc2libGUgLT4gdmlzaWJsZSAobmV3IGxvY2F0aW9uKVxuICAqL1xuICBwcml2YXRlIF91cGRhdGVCb3VuZHMobmV3Rml0Qm91bmRzRGV0YWlscz86IEZpdEJvdW5kc0RldGFpbHMpIHtcbiAgICAvLyBlaXRoZXIgdmlzaWJpbGl0eSB3aWxsIGNoYW5nZSwgb3IgbG9jYXRpb24sIHNvIHJlbW92ZSB0aGUgb2xkIG9uZSBhbnl3YXlcbiAgICBpZiAodGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5yZW1vdmVGcm9tQm91bmRzKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMubGF0TG5nKTtcbiAgICAgIC8vIGRvbid0IHNldCBsYXRlc3RGaXRCb3VuZHNEZXRhaWxzIHRvIG51bGwsIGJlY2F1c2Ugd2UgY2FuIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb21cbiAgICAgIC8vIHRydWUgLT4gZmFsc2UgLT4gdHJ1ZSwgaW4gd2hpY2ggY2FzZSB3ZSBzdGlsbCBuZWVkIG9sZCB2YWx1ZSBjYWNoZWQgaGVyZVxuICAgIH1cblxuICAgIGlmIChuZXdGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgICB0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzID0gbmV3Rml0Qm91bmRzRGV0YWlscztcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmFnbUZpdEJvdW5kcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5hZGRUb0JvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maXRCb3VuZHNTZXJ2aWNlLnJlbW92ZUZyb21Cb3VuZHModGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscy5sYXRMbmcpO1xuICAgIH1cbiAgfVxufVxuIl19