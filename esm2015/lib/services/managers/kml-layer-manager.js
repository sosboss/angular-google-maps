import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./../google-maps-api-wrapper";
/**
 * Manages all KML Layers for a Google Map instance.
 */
export class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) { return new (t || KmlLayerManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
KmlLayerManager.ɵprov = i0.ɵɵdefineInjectable({ token: KmlLayerManager, factory: KmlLayerManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(KmlLayerManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFLNUM7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUFvQixRQUE4QixFQUFVLEtBQWE7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSGpFLFlBQU8sR0FDWCxJQUFJLEdBQUcsRUFBOEMsQ0FBQztJQUVrQixDQUFDO0lBRTdFOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEtBQWtCO1FBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUMxQixHQUFHLEVBQUUsQ0FBQztnQkFDTixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO2dCQUN4QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7Z0JBQ3BDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7Z0JBQzlDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztnQkFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFrQixFQUFFLE9BQW9DO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWtCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUIsQ0FBSSxTQUFpQixFQUFFLEtBQWtCO1FBQzVELE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBdUIsRUFBRSxFQUFFO2dCQUN2RCxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhFQTVDVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5cbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS21sTGF5ZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtS21sTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuS21sTGF5ZXI+PiA9XG4gICAgICBuZXcgTWFwPEFnbUttbExheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLkttbExheWVyPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IEtNTCBMYXllciB0byB0aGUgbWFwLlxuICAgKi9cbiAgYWRkS21sTGF5ZXIobGF5ZXI6IEFnbUttbExheWVyKSB7XG4gICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4obSA9PiB7XG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkttbExheWVyKHtcbiAgICAgICAgY2xpY2thYmxlOiBsYXllci5jbGlja2FibGUsXG4gICAgICAgIG1hcDogbSxcbiAgICAgICAgcHJlc2VydmVWaWV3cG9ydDogbGF5ZXIucHJlc2VydmVWaWV3cG9ydCxcbiAgICAgICAgc2NyZWVuT3ZlcmxheXM6IGxheWVyLnNjcmVlbk92ZXJsYXlzLFxuICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBsYXllci5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICB1cmw6IGxheWVyLnVybCxcbiAgICAgICAgekluZGV4OiBsYXllci56SW5kZXgsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gIH1cblxuICBzZXRPcHRpb25zKGxheWVyOiBBZ21LbWxMYXllciwgb3B0aW9uczogZ29vZ2xlLm1hcHMuS21sTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IGwuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBkZWxldGVLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGxheWVyOiBBZ21LbWxMYXllcik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKChtOiBnb29nbGUubWFwcy5LbWxMYXllcikgPT4ge1xuICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=