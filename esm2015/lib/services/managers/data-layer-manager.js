import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./../google-maps-api-wrapper";
/**
 * Manages all Data Layers for a Google Map instance.
 */
export class DataLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer) {
        const newLayer = this._wrapper.createDataLayer({
            style: layer.style,
        })
            .then(d => {
            if (layer.geoJson) {
                // NOTE: accessing "features" on google.maps.Data is undocumented
                this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    }
    deleteDataLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    updateGeoJson(layer, geoJson) {
        this._layers.get(layer).then(l => {
            l.forEach(feature => {
                l.remove(feature);
                // NOTE: accessing "features" on google.maps.Data is undocumented
                const index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            this.getDataFeatures(l, geoJson).then(features => l.features = features);
        });
    }
    setDataOptions(layer, options) {
        this._layers.get(layer).then(l => {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((d) => {
                d.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d, geoJson) {
        return new Promise((resolve, reject) => {
            if (typeof geoJson === 'object') {
                try {
                    const features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject(`Impossible to extract features from geoJson: wrong argument type`);
            }
        });
    }
}
DataLayerManager.ɵfac = function DataLayerManager_Factory(t) { return new (t || DataLayerManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
DataLayerManager.ɵprov = i0.ɵɵdefineInjectable({ token: DataLayerManager, factory: DataLayerManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataLayerManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7OztBQUs1Qzs7R0FFRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0IsWUFBb0IsUUFBOEIsRUFBVSxLQUFhO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhqRSxZQUFPLEdBQ2YsSUFBSSxHQUFHLEVBQTJDLENBQUM7SUFFMEIsQ0FBQztJQUU5RTs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQjtRQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUM3QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDYSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIsaUVBQWlFO2dCQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUN6RjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFtQjtRQUNqQyxJQUFJLENB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QUFFO2dCQUN0QyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dGQXRGVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ21EYXRhTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4vLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuXG4vKipcbiAqIE1hbmFnZXMgYWxsIERhdGEgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhTGF5ZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtRGF0YUxheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLkRhdGE+PiA9XG4gIG5ldyBNYXA8QWdtRGF0YUxheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLkRhdGE+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IERhdGEgTGF5ZXIgdG8gdGhlIG1hcC5cbiAgICovXG4gIGFkZERhdGFMYXllcihsYXllcjogQWdtRGF0YUxheWVyKSB7XG4gICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmNyZWF0ZURhdGFMYXllcih7XG4gICAgICBzdHlsZTogbGF5ZXIuc3R5bGUsXG4gICAgfSBhcyBnb29nbGUubWFwcy5EYXRhLkRhdGFPcHRpb25zKVxuICAgIC50aGVuKGQgPT4ge1xuICAgICAgaWYgKGxheWVyLmdlb0pzb24pIHtcbiAgICAgICAgLy8gTk9URTogYWNjZXNzaW5nIFwiZmVhdHVyZXNcIiBvbiBnb29nbGUubWFwcy5EYXRhIGlzIHVuZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmdldERhdGFGZWF0dXJlcyhkLCBsYXllci5nZW9Kc29uKS50aGVuKGZlYXR1cmVzID0+IChkIGFzIGFueSkuZmVhdHVyZXMgPSBmZWF0dXJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZDtcbiAgICB9KTtcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gIH1cblxuICBkZWxldGVEYXRhTGF5ZXIobGF5ZXI6IEFnbURhdGFMYXllcikge1xuICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4obCA9PiB7XG4gICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlR2VvSnNvbihsYXllcjogQWdtRGF0YUxheWVyLCBnZW9Kc29uOiBvYmplY3QgfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICBsLnJlbW92ZShmZWF0dXJlKTtcblxuICAgICAgICAvLyBOT1RFOiBhY2Nlc3NpbmcgXCJmZWF0dXJlc1wiIG9uIGdvb2dsZS5tYXBzLkRhdGEgaXMgdW5kb2N1bWVudGVkXG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGwgYXMgYW55KS5mZWF0dXJlcy5pbmRleE9mKGZlYXR1cmUsIDApO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIChsIGFzIGFueSkuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmdldERhdGFGZWF0dXJlcyhsLCBnZW9Kc29uKS50aGVuKGZlYXR1cmVzID0+IChsIGFzIGFueSkuZmVhdHVyZXMgPSBmZWF0dXJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREYXRhT3B0aW9ucyhsYXllcjogQWdtRGF0YUxheWVyLCBvcHRpb25zOiBnb29nbGUubWFwcy5EYXRhLkRhdGFPcHRpb25zKVxuICB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IHtcbiAgICAgIGwuc2V0Q29udHJvbFBvc2l0aW9uKG9wdGlvbnMuY29udHJvbFBvc2l0aW9uKTtcbiAgICAgIGwuc2V0Q29udHJvbHMob3B0aW9ucy5jb250cm9scyk7XG4gICAgICBsLnNldERyYXdpbmdNb2RlKG9wdGlvbnMuZHJhd2luZ01vZGUpO1xuICAgICAgbC5zZXRTdHlsZShvcHRpb25zLnN0eWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBEYXRhTGF5ZXIgYXMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsYXllcjogQWdtRGF0YUxheWVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oKGQ6IGdvb2dsZS5tYXBzLkRhdGEpID0+IHtcbiAgICAgICAgZC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZlYXR1cmVzIGZyb20gYSBnZW9Kc29uIHVzaW5nIGdvb2dsZS5tYXBzIERhdGEgQ2xhc3NcbiAgICogQHBhcmFtIGQgOiBnb29nbGUubWFwcy5EYXRhIGNsYXNzIGluc3RhbmNlXG4gICAqIEBwYXJhbSBnZW9Kc29uIDogdXJsIG9yIGdlb2pzb24gb2JqZWN0XG4gICAqL1xuICBnZXREYXRhRmVhdHVyZXMoZDogZ29vZ2xlLm1hcHMuRGF0YSwgZ2VvSnNvbjogb2JqZWN0IHwgc3RyaW5nKTogUHJvbWlzZTxnb29nbGUubWFwcy5EYXRhLkZlYXR1cmVbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxnb29nbGUubWFwcy5EYXRhLkZlYXR1cmVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGdlb0pzb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZC5hZGRHZW9Kc29uKGdlb0pzb24pO1xuICAgICAgICAgICAgcmVzb2x2ZShmZWF0dXJlcyk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2VvSnNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkLmxvYWRHZW9Kc29uKGdlb0pzb24sIG51bGwsIHJlc29sdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChgSW1wb3NzaWJsZSB0byBleHRyYWN0IGZlYXR1cmVzIGZyb20gZ2VvSnNvbjogd3JvbmcgYXJndW1lbnQgdHlwZWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19