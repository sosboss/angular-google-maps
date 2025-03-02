import { Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FitBoundsAccessor } from '../services/fit-bounds';
import * as i0 from "@angular/core";
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
export class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this.positionChanged.emit({
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            });
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(startWith({ lat: this.latitude, lng: this.longitude }), map(position => ({ latLng: position })));
    }
}
AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) { return new (t || AgmPolylinePoint)(); };
AgmPolylinePoint.ɵdir = i0.ɵɵdefineDirective({ type: AgmPolylinePoint, selectors: [["agm-polyline-point"]], inputs: { latitude: "latitude", longitude: "longitude" }, outputs: { positionChanged: "positionChanged" }, features: [i0.ɵɵProvidersFeature([
            { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
        ]), i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmPolylinePoint, [{
        type: Directive,
        args: [{
                selector: 'agm-polyline-point',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
                ],
            }]
    }], function () { return []; }, { latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], positionChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9wb2x5bGluZS1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0sd0JBQXdCLENBQUM7O0FBRTdFOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCO1FBTEE7O1dBRUc7UUFDTyxvQkFBZSxHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztJQUVwRyxDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxvQ0FBb0M7UUFDcEMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2dCQUN4QixHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDM0UsR0FBRyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDL0UsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxtQ0FBbUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDOUIsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUNwRCxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7O2dGQW5DVSxnQkFBZ0I7cURBQWhCLGdCQUFnQixtTEFKaEI7WUFDVCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUM7U0FDOUU7a0RBRVUsZ0JBQWdCO2NBTjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO2lCQUM5RTthQUNGOztrQkFLRSxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaXRCb3VuZHNBY2Nlc3NvciwgRml0Qm91bmRzRGV0YWlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xuXG4vKipcbiAqIEFnbVBvbHlsaW5lUG9pbnQgcmVwcmVzZW50cyBvbmUgZWxlbWVudCBvZiBhIHBvbHlsaW5lIHdpdGhpbiBhICB7QGxpbmtcbiAqIEFnbVBvbHlsaW5lfVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tcG9seWxpbmUtcG9pbnQnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogRml0Qm91bmRzQWNjZXNzb3IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFnbVBvbHlsaW5lUG9pbnQpfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWdtUG9seWxpbmVQb2ludCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRml0Qm91bmRzQWNjZXNzb3Ige1xuICAvKipcbiAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHBvc2l0aW9uIG9mIHRoZSBwb2ludDtcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICBsYXQ6IGNoYW5nZXNbJ2xhdGl0dWRlJ10gPyBjaGFuZ2VzWydsYXRpdHVkZSddLmN1cnJlbnRWYWx1ZSA6IHRoaXMubGF0aXR1ZGUsXG4gICAgICAgIGxuZzogY2hhbmdlc1snbG9uZ2l0dWRlJ10gPyBjaGFuZ2VzWydsb25naXR1ZGUnXS5jdXJyZW50VmFsdWUgOiB0aGlzLmxvbmdpdHVkZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXRGaXRCb3VuZHNEZXRhaWxzJCgpOiBPYnNlcnZhYmxlPEZpdEJvdW5kc0RldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkNoYW5nZWQucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh7bGF0OiB0aGlzLmxhdGl0dWRlLCBsbmc6IHRoaXMubG9uZ2l0dWRlfSksXG4gICAgICBtYXAocG9zaXRpb24gPT4gKHtsYXRMbmc6IHBvc2l0aW9ufSkpXG4gICAgKTtcbiAgfVxufVxuIl19