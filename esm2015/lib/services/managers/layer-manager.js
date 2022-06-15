import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
export class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer) {
        const newLayer = this._wrapper.createTransitLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer) {
        const newLayer = this._wrapper.createBicyclingLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
}
LayerManager.ɵfac = function LayerManager_Factory(t) { return new (t || LayerManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper)); };
LayerManager.ɵprov = i0.ɵɵdefineInjectable({ token: LayerManager, factory: LayerManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszQzs7R0FFRztBQUdILE1BQU0sT0FBTyxZQUFZO0lBSXJCLFlBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBSDFDLFlBQU8sR0FDWCxJQUFJLEdBQUcsRUFBdUcsQ0FBQztJQUU5RCxDQUFDO0lBRXREOzs7OztPQUtHO0lBQ0gsZUFBZSxDQUFDLEtBQXNCO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUJBQWlCLENBQUMsS0FBd0I7UUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQTBDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQy9DLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzt3RUFyQ1EsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ21CaWN5Y2xpbmdMYXllciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYmljeWNsaW5nLWxheWVyJztcbmltcG9ydCB7IEFnbVRyYW5zaXRMYXllciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdHJhbnNpdC1sYXllcic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgVHJhbnNpdCBhbmQgQmljeWNsaW5nIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYXllck1hbmFnZXIge1xuICAgIHByaXZhdGUgX2xheWVyczogTWFwPEFnbVRyYW5zaXRMYXllciB8IEFnbUJpY3ljbGluZ0xheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllciB8IGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyPj4gPVxuICAgICAgICBuZXcgTWFwPEFnbVRyYW5zaXRMYXllciB8IEFnbUJpY3ljbGluZ0xheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllciB8IGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyPj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRyYW5zaXQgbGF5ZXIgdG8gYSBtYXAgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIGxheWVyIC0gYSBUcmFuc2l0TGF5ZXIgb2JqZWN0XG4gICAgICogQHBhcmFtIF9vcHRpb25zIC0gVHJhbnNpdExheWVyT3B0aW9ucyBvcHRpb25zXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZFRyYW5zaXRMYXllcihsYXllcjogQWdtVHJhbnNpdExheWVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5jcmVhdGVUcmFuc2l0TGF5ZXIoKTtcbiAgICAgICAgdGhpcy5fbGF5ZXJzLnNldChsYXllciwgbmV3TGF5ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBiaWN5Y2xpbmcgbGF5ZXIgdG8gYSBtYXAgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIGxheWVyIC0gYSBiaWN5Y2xpbmcgbGF5ZXIgb2JqZWN0XG4gICAgICogQHBhcmFtIF9vcHRpb25zIC0gQmljeWNsaW5nTGF5ZXIgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRCaWN5Y2xpbmdMYXllcihsYXllcjogQWdtQmljeWNsaW5nTGF5ZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmNyZWF0ZUJpY3ljbGluZ0xheWVyKCk7XG4gICAgICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgbWFwIGxheWVyXG4gICAgICogQHBhcmFtIGxheWVyIC0gdGhlIGxheWVyIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUxheWVyKGxheWVyOiBBZ21UcmFuc2l0TGF5ZXIgfCBBZ21CaWN5Y2xpbmdMYXllcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihjdXJyZW50TGF5ZXIgPT4ge1xuICAgICAgICAgICAgY3VycmVudExheWVyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=