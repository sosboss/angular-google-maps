import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./../google-maps-api-wrapper";
export class MarkerManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    convertAnimation(uiAnim) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uiAnim === null) {
                return null;
            }
            else {
                return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
            }
        });
    }
    deleteMarker(markerDirective) {
        const markerPromise = this._markers.get(markerDirective);
        if (markerPromise == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return markerPromise.then((marker) => {
            return this._zone.run(() => {
                marker.setMap(null);
                this._markers.delete(markerDirective);
            });
        });
    }
    updateMarkerPosition(marker) {
        return this._markers.get(marker).then((m) => m.setPosition({ lat: marker.latitude, lng: marker.longitude }));
    }
    updateTitle(marker) {
        return this._markers.get(marker).then((m) => m.setTitle(marker.title));
    }
    updateLabel(marker) {
        return this._markers.get(marker).then((m) => { m.setLabel(marker.label); });
    }
    updateDraggable(marker) {
        return this._markers.get(marker).then((m) => m.setDraggable(marker.draggable));
    }
    updateIcon(marker) {
        return this._markers.get(marker).then((m) => m.setIcon(marker.iconUrl));
    }
    updateOpacity(marker) {
        return this._markers.get(marker).then((m) => m.setOpacity(marker.opacity));
    }
    updateVisible(marker) {
        return this._markers.get(marker).then((m) => m.setVisible(marker.visible));
    }
    updateZIndex(marker) {
        return this._markers.get(marker).then((m) => m.setZIndex(marker.zIndex));
    }
    updateClickable(marker) {
        return this._markers.get(marker).then((m) => m.setClickable(marker.clickable));
    }
    updateAnimation(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const m = yield this._markers.get(marker);
            m.setAnimation(yield this.convertAnimation(marker.animation));
        });
    }
    addMarker(marker) {
        const markerPromise = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            return this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: yield this.convertAnimation(marker.animation),
            }).then(resolve);
        }));
        this._markers.set(marker, markerPromise);
    }
    getNativeMarker(marker) {
        return this._markers.get(marker);
    }
    createEventObservable(eventName, marker) {
        return new Observable(observer => {
            this._markers.get(marker).then(m => m.addListener(eventName, e => this._zone.run(() => observer.next(e))));
        });
    }
}
MarkerManager.ɵfac = function MarkerManager_Factory(t) { return new (t || MarkerManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
MarkerManager.ɵprov = i0.ɵɵdefineInjectable({ token: MarkerManager, factory: MarkerManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MarkerManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBT2xDLE1BQU0sT0FBTyxhQUFhO0lBSXhCLFlBQXNCLFlBQWtDLEVBQVksS0FBYTtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBWSxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSHZFLGFBQVEsR0FDZCxJQUFJLEdBQUcsRUFBMEMsQ0FBQztJQUU4QixDQUFDO0lBRS9FLGdCQUFnQixDQUFDLE1BQWlEOztZQUN0RSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ25GO1FBQ0gsQ0FBQztLQUFBO0lBRUQsWUFBWSxDQUFDLGVBQTBCO1FBQ3JDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtZQUN6Qix5QkFBeUI7WUFDekIsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7WUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2pDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBaUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBaUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBaUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBaUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBaUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBaUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBaUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFSyxlQUFlLENBQUMsTUFBaUI7O1lBQ3JDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFFRCxTQUFTLENBQUMsTUFBaUI7UUFDekIsTUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQXFCLENBQU8sT0FBTyxFQUFFLEVBQUU7WUFDdkUsT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUM7Z0JBQ3ZELEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dCQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUN2QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dCQUMzQixTQUFTLEVBQUUsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1VBQUEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFCQUFxQixDQUNqQixTQUF1RixFQUN2RixNQUFpQjtRQUNuQixPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNqQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswRUFuR1UsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYTtrREFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtTWFya2VyIH0gZnJvbSAnLi8uLi8uLi9kaXJlY3RpdmVzL21hcmtlcic7XG5cbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXJrZXJNYW5hZ2VyIHtcbiAgcHJvdGVjdGVkIF9tYXJrZXJzOiBNYXA8QWdtTWFya2VyLCBQcm9taXNlPGdvb2dsZS5tYXBzLk1hcmtlcj4+ID1cbiAgICAgIG5ldyBNYXA8QWdtTWFya2VyLCBQcm9taXNlPGdvb2dsZS5tYXBzLk1hcmtlcj4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByb3RlY3RlZCBfem9uZTogTmdab25lKSB7fVxuXG4gIGFzeW5jIGNvbnZlcnRBbmltYXRpb24odWlBbmltOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuQW5pbWF0aW9uIHwgbnVsbCkge1xuICAgIGlmICh1aUFuaW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigoKSA9PiBnb29nbGUubWFwcy5BbmltYXRpb25bdWlBbmltXSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTWFya2VyKG1hcmtlckRpcmVjdGl2ZTogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbWFya2VyUHJvbWlzZSA9IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlckRpcmVjdGl2ZSk7XG4gICAgaWYgKG1hcmtlclByb21pc2UgPT0gbnVsbCkge1xuICAgICAgLy8gbWFya2VyIGFscmVhZHkgZGVsZXRlZFxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFya2VyUHJvbWlzZS50aGVuKChtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgdGhpcy5fbWFya2Vycy5kZWxldGUobWFya2VyRGlyZWN0aXZlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKFxuICAgICAgICAobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiBtLnNldFBvc2l0aW9uKHtsYXQ6IG1hcmtlci5sYXRpdHVkZSwgbG5nOiBtYXJrZXIubG9uZ2l0dWRlfSkpO1xuICB9XG5cbiAgdXBkYXRlVGl0bGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0VGl0bGUobWFya2VyLnRpdGxlKSk7XG4gIH1cblxuICB1cGRhdGVMYWJlbChtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4geyBtLnNldExhYmVsKG1hcmtlci5sYWJlbCk7IH0pO1xuICB9XG5cbiAgdXBkYXRlRHJhZ2dhYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiBtLnNldERyYWdnYWJsZShtYXJrZXIuZHJhZ2dhYmxlKSk7XG4gIH1cblxuICB1cGRhdGVJY29uKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiBtLnNldEljb24obWFya2VyLmljb25VcmwpKTtcbiAgfVxuXG4gIHVwZGF0ZU9wYWNpdHkobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0T3BhY2l0eShtYXJrZXIub3BhY2l0eSkpO1xuICB9XG5cbiAgdXBkYXRlVmlzaWJsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4gbS5zZXRWaXNpYmxlKG1hcmtlci52aXNpYmxlKSk7XG4gIH1cblxuICB1cGRhdGVaSW5kZXgobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0WkluZGV4KG1hcmtlci56SW5kZXgpKTtcbiAgfVxuXG4gIHVwZGF0ZUNsaWNrYWJsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4gbS5zZXRDbGlja2FibGUobWFya2VyLmNsaWNrYWJsZSkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQW5pbWF0aW9uKG1hcmtlcjogQWdtTWFya2VyKSB7XG4gICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgbS5zZXRBbmltYXRpb24oYXdhaXQgdGhpcy5jb252ZXJ0QW5pbWF0aW9uKG1hcmtlci5hbmltYXRpb24pKTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXI6IEFnbU1hcmtlcikge1xuICAgIGNvbnN0IG1hcmtlclByb21pc2UgPSBuZXcgUHJvbWlzZTxnb29nbGUubWFwcy5NYXJrZXI+KGFzeW5jIChyZXNvbHZlKSA9PlxuICAgICB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVNYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge2xhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGV9LFxuICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICBkcmFnZ2FibGU6IG1hcmtlci5kcmFnZ2FibGUsXG4gICAgICAgIGljb246IG1hcmtlci5pY29uVXJsLFxuICAgICAgICBvcGFjaXR5OiBtYXJrZXIub3BhY2l0eSxcbiAgICAgICAgdmlzaWJsZTogbWFya2VyLnZpc2libGUsXG4gICAgICAgIHpJbmRleDogbWFya2VyLnpJbmRleCxcbiAgICAgICAgdGl0bGU6IG1hcmtlci50aXRsZSxcbiAgICAgICAgY2xpY2thYmxlOiBtYXJrZXIuY2xpY2thYmxlLFxuICAgICAgICBhbmltYXRpb246IGF3YWl0IHRoaXMuY29udmVydEFuaW1hdGlvbihtYXJrZXIuYW5pbWF0aW9uKSxcbiAgICAgIH0pLnRoZW4ocmVzb2x2ZSkpO1xuICAgIHRoaXMuX21hcmtlcnMuc2V0KG1hcmtlciwgbWFya2VyUHJvbWlzZSk7XG4gIH1cblxuICBnZXROYXRpdmVNYXJrZXIobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPGdvb2dsZS5tYXBzLk1hcmtlcj4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQgZXh0ZW5kcyAoZ29vZ2xlLm1hcHMuTW91c2VFdmVudCB8IHZvaWQpPihcbiAgICAgIGV2ZW50TmFtZTogZ29vZ2xlLm1hcHMuTWFya2VyTW91c2VFdmVudE5hbWVzIHwgZ29vZ2xlLm1hcHMuTWFya2VyQ2hhbmdlT3B0aW9uRXZlbnROYW1lcyxcbiAgICAgIG1hcmtlcjogQWdtTWFya2VyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihtID0+XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBlID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19