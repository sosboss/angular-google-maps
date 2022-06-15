import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createMVCEventObservable } from '../../utils/mvcarray-utils';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
export class PolylineManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    static _convertPoints(line) {
        const path = line._getPoints().map((point) => {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    }
    static _convertPath(path) {
        const symbolPath = google.maps.SymbolPath[path];
        if (typeof symbolPath === 'number') {
            return symbolPath;
        }
        else {
            return path;
        }
    }
    static _convertIcons(line) {
        const icons = line._getIcons().map(agmIcon => ({
            fixedRotation: agmIcon.fixedRotation,
            offset: agmIcon.offset,
            repeat: agmIcon.repeat,
            icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight,
            },
        }));
        // prune undefineds;
        icons.forEach(icon => {
            Object.entries(icon).forEach(([key, val]) => {
                if (typeof val === 'undefined') {
                    delete icon[key];
                }
            });
            if (typeof icon.icon.anchor.x === 'undefined' ||
                typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
            }
        });
        return icons;
    }
    addPolyline(line) {
        const polylinePromise = this._mapsWrapper.getNativeMap()
            .then(() => [PolylineManager._convertPoints(line),
            PolylineManager._convertIcons(line)])
            .then(([path, icons]) => this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path,
            icons,
        }));
        this._polylines.set(line, polylinePromise);
    }
    updatePolylinePoints(line) {
        const path = PolylineManager._convertPoints(line);
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => l.setPath(path)));
    }
    updateIconSequences(line) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._mapsWrapper.getNativeMap();
            const icons = PolylineManager._convertIcons(line);
            const m = this._polylines.get(line);
            if (m == null) {
                return;
            }
            return m.then(l => this._zone.run(() => l.setOptions({ icons })));
        });
    }
    setPolylineOptions(line, options) {
        return this._polylines.get(line).then((l) => { l.setOptions(options); });
    }
    deletePolyline(line) {
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polylines.delete(line);
            });
        });
    }
    getMVCPath(agmPolyline) {
        return __awaiter(this, void 0, void 0, function* () {
            const polyline = yield this._polylines.get(agmPolyline);
            return polyline.getPath();
        });
    }
    getPath(agmPolyline) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getMVCPath(agmPolyline)).getArray();
        });
    }
    createEventObservable(eventName, line) {
        return new Observable((observer) => {
            this._polylines.get(line).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(line) {
        return __awaiter(this, void 0, void 0, function* () {
            const mvcPath = yield this.getMVCPath(line);
            return createMVCEventObservable(mvcPath);
        });
    }
}
PolylineManager.ɵfac = function PolylineManager_Factory(t) { return new (t || PolylineManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
PolylineManager.ɵprov = i0.ɵɵdefineInjectable({ token: PolylineManager, factory: PolylineManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolylineManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFJNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFZLE1BQU0sNEJBQTRCLENBQUM7OztBQUloRixNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUFvQixZQUFrQyxFQUFVLEtBQWE7UUFBekQsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhyRSxlQUFVLEdBQ2QsSUFBSSxHQUFHLEVBQThDLENBQUM7SUFFc0IsQ0FBQztJQUV6RSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQWlCO1FBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUU7WUFDN0QsT0FBTyxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUE4QixDQUFDO1FBQ2xGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFrRDtRQUM1RSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUEyQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBSztZQUNKLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8s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QUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLHlCQUF5QixDQUFDLElBQWlCOztZQUMvQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsT0FBTyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7OzhFQXBJVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtUG9seWxpbmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvbHlsaW5lJztcbmltcG9ydCB7IEFnbVBvbHlsaW5lUG9pbnQgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50JztcbmltcG9ydCB7IGNyZWF0ZU1WQ0V2ZW50T2JzZXJ2YWJsZSwgTVZDRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9tdmNhcnJheS11dGlscyc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvbHlsaW5lTWFuYWdlciB7XG4gIHByaXZhdGUgX3BvbHlsaW5lczogTWFwPEFnbVBvbHlsaW5lLCBQcm9taXNlPGdvb2dsZS5tYXBzLlBvbHlsaW5lPj4gPVxuICAgICAgbmV3IE1hcDxBZ21Qb2x5bGluZSwgUHJvbWlzZTxnb29nbGUubWFwcy5Qb2x5bGluZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbnZlcnRQb2ludHMobGluZTogQWdtUG9seWxpbmUpOiBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW10ge1xuICAgIGNvbnN0IHBhdGggPSBsaW5lLl9nZXRQb2ludHMoKS5tYXAoKHBvaW50OiBBZ21Qb2x5bGluZVBvaW50KSA9PiB7XG4gICAgICByZXR1cm4ge2xhdDogcG9pbnQubGF0aXR1ZGUsIGxuZzogcG9pbnQubG9uZ2l0dWRlfSBhcyBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbnZlcnRQYXRoKHBhdGg6IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5TeW1ib2xQYXRoIHwgc3RyaW5nKTogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aCB8IHN0cmluZyB7XG4gICAgY29uc3Qgc3ltYm9sUGF0aCA9IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGhbcGF0aCBhcyBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aF07XG4gICAgaWYgKHR5cGVvZiBzeW1ib2xQYXRoID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHN5bWJvbFBhdGg7XG4gICAgfSBlbHNle1xuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbnZlcnRJY29ucyhsaW5lOiBBZ21Qb2x5bGluZSk6IEFycmF5PGdvb2dsZS5tYXBzLkljb25TZXF1ZW5jZT4ge1xuICAgIGNvbnN0IGljb25zID0gbGluZS5fZ2V0SWNvbnMoKS5tYXAoYWdtSWNvbiA9PiAoe1xuICAgICAgZml4ZWRSb3RhdGlvbjogYWdtSWNvbi5maXhlZFJvdGF0aW9uLFxuICAgICAgb2Zmc2V0OiBhZ21JY29uLm9mZnNldCxcbiAgICAgIHJlcGVhdDogYWdtSWNvbi5yZXBlYXQsXG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KGFnbUljb24uYW5jaG9yWCwgYWdtSWNvbi5hbmNob3JZKSxcbiAgICAgICAgZmlsbENvbG9yOiBhZ21JY29uLmZpbGxDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IGFnbUljb24uZmlsbE9wYWNpdHksXG4gICAgICAgIHBhdGg6IFBvbHlsaW5lTWFuYWdlci5fY29udmVydFBhdGgoYWdtSWNvbi5wYXRoKSxcbiAgICAgICAgcm90YXRpb246IGFnbUljb24ucm90YXRpb24sXG4gICAgICAgIHNjYWxlOiBhZ21JY29uLnNjYWxlLFxuICAgICAgICBzdHJva2VDb2xvcjogYWdtSWNvbi5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogYWdtSWNvbi5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IGFnbUljb24uc3Ryb2tlV2VpZ2h0LFxuICAgICAgfSxcbiAgICB9IGFzIGdvb2dsZS5tYXBzLkljb25TZXF1ZW5jZSkpO1xuICAgIC8vIHBydW5lIHVuZGVmaW5lZHM7XG4gICAgaWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGljb24pLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZGVsZXRlIChpY29uIGFzIGFueSlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGljb24uaWNvbi5hbmNob3IueCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIGljb24uaWNvbi5hbmNob3IueSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkZWxldGUgaWNvbi5pY29uLmFuY2hvcjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpY29ucztcbiAgfVxuXG4gIGFkZFBvbHlsaW5lKGxpbmU6IEFnbVBvbHlsaW5lKSB7XG4gICAgY29uc3QgcG9seWxpbmVQcm9taXNlID0gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKClcbiAgICAudGhlbigoKSA9PiBbIFBvbHlsaW5lTWFuYWdlci5fY29udmVydFBvaW50cyhsaW5lKSxcbiAgICAgICAgICAgICAgICAgIFBvbHlsaW5lTWFuYWdlci5fY29udmVydEljb25zKGxpbmUpXSlcbiAgICAudGhlbigoW3BhdGgsIGljb25zXTogW2dvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXSwgZ29vZ2xlLm1hcHMuSWNvblNlcXVlbmNlW11dKSA9PlxuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlUG9seWxpbmUoe1xuICAgICAgICBjbGlja2FibGU6IGxpbmUuY2xpY2thYmxlLFxuICAgICAgICBkcmFnZ2FibGU6IGxpbmUuZHJhZ2dhYmxlLFxuICAgICAgICBlZGl0YWJsZTogbGluZS5lZGl0YWJsZSxcbiAgICAgICAgZ2VvZGVzaWM6IGxpbmUuZ2VvZGVzaWMsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBsaW5lLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBsaW5lLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogbGluZS5zdHJva2VXZWlnaHQsXG4gICAgICAgIHZpc2libGU6IGxpbmUudmlzaWJsZSxcbiAgICAgICAgekluZGV4OiBsaW5lLnpJbmRleCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgaWNvbnMsXG4gICAgfSkpO1xuICAgIHRoaXMuX3BvbHlsaW5lcy5zZXQobGluZSwgcG9seWxpbmVQcm9taXNlKTtcbiAgfVxuXG4gIHVwZGF0ZVBvbHlsaW5lUG9pbnRzKGxpbmU6IEFnbVBvbHlsaW5lKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGF0aCA9IFBvbHlsaW5lTWFuYWdlci5fY29udmVydFBvaW50cyhsaW5lKTtcbiAgICBjb25zdCBtID0gdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKTtcbiAgICBpZiAobSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBtLnRoZW4oKGwpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IGwuc2V0UGF0aChwYXRoKSkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlSWNvblNlcXVlbmNlcyhsaW5lOiBBZ21Qb2x5bGluZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpO1xuICAgIGNvbnN0IGljb25zID0gUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0SWNvbnMobGluZSk7XG4gICAgY29uc3QgbSA9IHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSk7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKGwgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gbC5zZXRPcHRpb25zKHtpY29uc30pICkgKTtcbiAgfVxuXG4gIHNldFBvbHlsaW5lT3B0aW9ucyhsaW5lOiBBZ21Qb2x5bGluZSwgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSk6XG4gICAgICBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKS50aGVuKChsOiBnb29nbGUubWFwcy5Qb2x5bGluZSkgPT4geyBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgZGVsZXRlUG9seWxpbmUobGluZTogQWdtUG9seWxpbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtID0gdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKTtcbiAgICBpZiAobSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBtLnRoZW4oKGw6IGdvb2dsZS5tYXBzLlBvbHlsaW5lKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVzLmRlbGV0ZShsaW5lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRNVkNQYXRoKGFnbVBvbHlsaW5lOiBBZ21Qb2x5bGluZSk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTVZDQXJyYXk8Z29vZ2xlLm1hcHMuTGF0TG5nPj4ge1xuICAgIGNvbnN0IHBvbHlsaW5lID0gYXdhaXQgdGhpcy5fcG9seWxpbmVzLmdldChhZ21Qb2x5bGluZSk7XG4gICAgcmV0dXJuIHBvbHlsaW5lLmdldFBhdGgoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFBhdGgoYWdtUG9seWxpbmU6IEFnbVBvbHlsaW5lKTogUHJvbWlzZTxnb29nbGUubWFwcy5MYXRMbmdbXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRNVkNQYXRoKGFnbVBvbHlsaW5lKSkuZ2V0QXJyYXkoKTtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGluZTogQWdtUG9seWxpbmUpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKS50aGVuKChsOiBnb29nbGUubWFwcy5Qb2x5bGluZSkgPT4ge1xuICAgICAgICBsLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUGF0aEV2ZW50T2JzZXJ2YWJsZShsaW5lOiBBZ21Qb2x5bGluZSk6IFByb21pc2U8T2JzZXJ2YWJsZTxNVkNFdmVudDxnb29nbGUubWFwcy5MYXRMbmc+Pj4ge1xuICAgIGNvbnN0IG12Y1BhdGggPSBhd2FpdCB0aGlzLmdldE1WQ1BhdGgobGluZSk7XG4gICAgcmV0dXJuIGNyZWF0ZU1WQ0V2ZW50T2JzZXJ2YWJsZShtdmNQYXRoKTtcbiAgfVxufVxuIl19