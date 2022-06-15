import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
export class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.getNativeMap().then(() => this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: google.maps.StrokePosition[rectangle.strokePosition],
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        })));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => {
            const actualStrokePosition = options.strokePosition;
            options.strokePosition = google.maps.StrokePosition[actualStrokePosition];
            r.setOptions(options);
        });
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return new Observable((subsrciber) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => subsrciber.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
RectangleManager.ɵfac = function RectangleManager_Factory(t) { return new (t || RectangleManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
RectangleManager.ɵprov = i0.ɵɵdefineInjectable({ token: RectangleManager, factory: RectangleManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RectangleManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMvcmVjdGFuZ2xlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFNOUMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQixZQUFvQixXQUFpQyxFQUFVLEtBQWE7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhwRSxnQkFBVyxHQUNmLElBQUksR0FBRyxFQUFnRCxDQUFDO0lBRW1CLENBQUM7SUFFaEYsWUFBWSxDQUFDLFNBQXVCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsQ0FDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztnQkFDdEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNwQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTthQUNyQjtZQUNELFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztZQUM5QixTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7WUFDOUIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO1lBQzVCLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztZQUM5QixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7WUFDbEMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxX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QUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsQ0FBSSxTQUFpQixFQUFFLFNBQXVCO1FBQ2pFLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxVQUF5QixFQUFFLEVBQUU7WUFDbEQsSUFBSSxRQUFRLEdBQWtDLElBQUksQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDekMsUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDckIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0ZBOUZVLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ21SZWN0YW5nbGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZU1hbmFnZXIge1xuICBwcml2YXRlIF9yZWN0YW5nbGVzOiBNYXA8QWdtUmVjdGFuZ2xlLCBQcm9taXNlPGdvb2dsZS5tYXBzLlJlY3RhbmdsZT4+ID1cbiAgICAgIG5ldyBNYXA8QWdtUmVjdGFuZ2xlLCBQcm9taXNlPGdvb2dsZS5tYXBzLlJlY3RhbmdsZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICBhZGRSZWN0YW5nbGUocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpIHtcbiAgICB0aGlzLl9yZWN0YW5nbGVzLnNldChyZWN0YW5nbGUsIHRoaXMuX2FwaVdyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbiggKCkgPT5cbiAgICAgIHRoaXMuX2FwaVdyYXBwZXIuY3JlYXRlUmVjdGFuZ2xlKHtcbiAgICAgICAgYm91bmRzOiB7XG4gICAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgICBlYXN0OiByZWN0YW5nbGUuZWFzdCxcbiAgICAgICAgICBzb3V0aDogcmVjdGFuZ2xlLnNvdXRoLFxuICAgICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgICB9LFxuICAgICAgICBjbGlja2FibGU6IHJlY3RhbmdsZS5jbGlja2FibGUsXG4gICAgICAgIGRyYWdnYWJsZTogcmVjdGFuZ2xlLmRyYWdnYWJsZSxcbiAgICAgICAgZWRpdGFibGU6IHJlY3RhbmdsZS5lZGl0YWJsZSxcbiAgICAgICAgZmlsbENvbG9yOiByZWN0YW5nbGUuZmlsbENvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogcmVjdGFuZ2xlLmZpbGxPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogcmVjdGFuZ2xlLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiByZWN0YW5nbGUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlUG9zaXRpb246IGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uW3JlY3RhbmdsZS5zdHJva2VQb3NpdGlvbl0sXG4gICAgICAgIHN0cm9rZVdlaWdodDogcmVjdGFuZ2xlLnN0cm9rZVdlaWdodCxcbiAgICAgICAgdmlzaWJsZTogcmVjdGFuZ2xlLnZpc2libGUsXG4gICAgICAgIHpJbmRleDogcmVjdGFuZ2xlLnpJbmRleCxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gcmVjdGFuZ2xlIGZyb20gdGhlIG1hcC5cbiAgICovXG4gIHJlbW92ZVJlY3RhbmdsZShyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHtcbiAgICAgIHIuc2V0TWFwKG51bGwpO1xuICAgICAgdGhpcy5fcmVjdGFuZ2xlcy5kZWxldGUocmVjdGFuZ2xlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE9wdGlvbnMocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUsIG9wdGlvbnM6IGdvb2dsZS5tYXBzLlJlY3RhbmdsZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICBjb25zdCBhY3R1YWxTdHJva2VQb3NpdGlvbiA9IG9wdGlvbnMuc3Ryb2tlUG9zaXRpb24gYXMgYW55IGFzIGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5TdHJva2VQb3NpdGlvbjtcbiAgICAgIG9wdGlvbnMuc3Ryb2tlUG9zaXRpb24gPSBnb29nbGUubWFwcy5TdHJva2VQb3NpdGlvblthY3R1YWxTdHJva2VQb3NpdGlvbl07XG4gICAgICByLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCb3VuZHMocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcz4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHIuZ2V0Qm91bmRzKCkpO1xuICB9XG5cbiAgc2V0Qm91bmRzKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0Qm91bmRzKHtcbiAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgZWFzdDogcmVjdGFuZ2xlLmVhc3QsXG4gICAgICAgIHNvdXRoOiByZWN0YW5nbGUuc291dGgsXG4gICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRFZGl0YWJsZShyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHtcbiAgICAgIHJldHVybiByLnNldEVkaXRhYmxlKHJlY3RhbmdsZS5lZGl0YWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREcmFnZ2FibGUocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICByZXR1cm4gci5zZXREcmFnZ2FibGUocmVjdGFuZ2xlLmRyYWdnYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0VmlzaWJsZShyZWN0YW5nbGUudmlzaWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzcmNpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgICBsZXQgbGlzdGVuZXI6IGdvb2dsZS5tYXBzLk1hcHNFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgICBsaXN0ZW5lciA9IHIuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoZTogVCkgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gc3Vic3JjaWJlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==