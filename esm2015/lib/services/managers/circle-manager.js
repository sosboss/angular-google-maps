import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../google-maps-api-wrapper";
export class CircleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    addCircle(circle) {
        return this._apiWrapper.getNativeMap().then(() => {
            this._circles.set(circle, this._apiWrapper.createCircle({
                center: { lat: circle.latitude, lng: circle.longitude },
                clickable: circle.clickable,
                draggable: circle.draggable,
                editable: circle.editable,
                fillColor: circle.fillColor,
                fillOpacity: circle.fillOpacity,
                radius: circle.radius,
                strokeColor: circle.strokeColor,
                strokeOpacity: circle.strokeOpacity,
                strokePosition: google.maps.StrokePosition[circle.strokePosition],
                strokeWeight: circle.strokeWeight,
                visible: circle.visible,
                zIndex: circle.zIndex,
            }));
        });
    }
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle) {
        return this._circles.get(circle).then((c) => {
            c.setMap(null);
            this._circles.delete(circle);
        });
    }
    setOptions(circle, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._circles.get(circle).then((c) => {
                const actualParam = options.strokePosition;
                options.strokePosition = google.maps.StrokePosition[actualParam];
                c.setOptions(options);
            });
        });
    }
    getBounds(circle) {
        return this._circles.get(circle).then((c) => c.getBounds());
    }
    getCenter(circle) {
        return this._circles.get(circle).then((c) => c.getCenter());
    }
    getRadius(circle) {
        return this._circles.get(circle).then((c) => c.getRadius());
    }
    setCenter(circle) {
        return this._circles
            .get(circle)
            .then((c) => c.setCenter({ lat: circle.latitude, lng: circle.longitude }));
    }
    setEditable(circle) {
        return this._circles
            .get(circle)
            .then((c) => c.setEditable(circle.editable));
    }
    setDraggable(circle) {
        return this._circles
            .get(circle)
            .then((c) => c.setDraggable(circle.draggable));
    }
    setVisible(circle) {
        return this._circles.get(circle).then((c) => c.setVisible(circle.visible));
    }
    setRadius(circle) {
        return this._circles.get(circle).then((c) => c.setRadius(circle.radius));
    }
    getNativeCircle(circle) {
        return this._circles.get(circle);
    }
    createEventObservable(eventName, circle) {
        return new Observable((observer) => {
            let listener = null;
            this._circles.get(circle).then((c) => {
                listener = c.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
CircleManager.ɵfac = function CircleManager_Factory(t) { return new (t || CircleManager)(i0.ɵɵinject(i1.GoogleMapsAPIWrapper), i0.ɵɵinject(i0.NgZone)); };
CircleManager.ɵprov = i0.ɵɵdefineInjectable({ token: CircleManager, factory: CircleManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CircleManager, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleMapsAPIWrapper }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7O0FBTTVDLE1BQU0sT0FBTyxhQUFhO0lBTXhCLFlBQ1UsV0FBaUMsRUFDakMsS0FBYTtRQURiLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBUGYsYUFBUSxHQUFnRCxJQUFJLEdBQUcsRUFHcEUsQ0FBQztJQUtELENBQUM7SUFFSixTQUFTLENBQUMsTUFBaUI7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2YsTUFBTSxFQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2dCQUM1QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDdkQsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dCQUMzQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7Z0JBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dCQUMzQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDckIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO2dCQUMvQixhQUFhLEVBQUUsTUFBTSxDQUFDLGFB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Q25CO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswRUFuSFUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYTtrREFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtQ2lyY2xlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jaXJjbGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaXJjbGVNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY2lyY2xlczogTWFwPEFnbUNpcmNsZSwgUHJvbWlzZTxnb29nbGUubWFwcy5DaXJjbGU+PiA9IG5ldyBNYXA8XG4gICAgQWdtQ2lyY2xlLFxuICAgIFByb21pc2U8Z29vZ2xlLm1hcHMuQ2lyY2xlPlxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXBpV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge31cblxuICBhZGRDaXJjbGUoY2lyY2xlOiBBZ21DaXJjbGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpV3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NpcmNsZXMuc2V0KFxuICAgICAgICBjaXJjbGUsXG4gICAgICAgIHRoaXMuX2FwaVdyYXBwZXIuY3JlYXRlQ2lyY2xlKHtcbiAgICAgICAgICBjZW50ZXI6IHsgbGF0OiBjaXJjbGUubGF0aXR1ZGUsIGxuZzogY2lyY2xlLmxvbmdpdHVkZSB9LFxuICAgICAgICAgIGNsaWNrYWJsZTogY2lyY2xlLmNsaWNrYWJsZSxcbiAgICAgICAgICBkcmFnZ2FibGU6IGNpcmNsZS5kcmFnZ2FibGUsXG4gICAgICAgICAgZWRpdGFibGU6IGNpcmNsZS5lZGl0YWJsZSxcbiAgICAgICAgICBmaWxsQ29sb3I6IGNpcmNsZS5maWxsQ29sb3IsXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IGNpcmNsZS5maWxsT3BhY2l0eSxcbiAgICAgICAgICByYWRpdXM6IGNpcmNsZS5yYWRpdXMsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IGNpcmNsZS5zdHJva2VDb2xvcixcbiAgICAgICAgICBzdHJva2VPcGFjaXR5OiBjaXJjbGUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICBzdHJva2VQb3NpdGlvbjogZ29vZ2xlLm1hcHMuU3Ryb2tlUG9zaXRpb25bY2lyY2xlLnN0cm9rZVBvc2l0aW9uXSxcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IGNpcmNsZS5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgdmlzaWJsZTogY2lyY2xlLnZpc2libGUsXG4gICAgICAgICAgekluZGV4OiBjaXJjbGUuekluZGV4LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjaXJjbGUgZnJvbSB0aGUgbWFwLlxuICAgKi9cbiAgcmVtb3ZlQ2lyY2xlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbigoYykgPT4ge1xuICAgICAgYy5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9jaXJjbGVzLmRlbGV0ZShjaXJjbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2V0T3B0aW9ucyhjaXJjbGU6IEFnbUNpcmNsZSwgb3B0aW9uczogZ29vZ2xlLm1hcHMuQ2lyY2xlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IHtcbiAgICAgIGNvbnN0IGFjdHVhbFBhcmFtID1cbiAgICAgICAgb3B0aW9ucy5zdHJva2VQb3NpdGlvbiBhcyBhbnkgYXMga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uO1xuICAgICAgb3B0aW9ucy5zdHJva2VQb3NpdGlvbiA9IGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uW2FjdHVhbFBhcmFtXTtcbiAgICAgIGMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJvdW5kcyhjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbigoYykgPT4gYy5nZXRCb3VuZHMoKSk7XG4gIH1cblxuICBnZXRDZW50ZXIoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZz4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IGMuZ2V0Q2VudGVyKCkpO1xuICB9XG5cbiAgZ2V0UmFkaXVzKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiBjLmdldFJhZGl1cygpKTtcbiAgfVxuXG4gIHNldENlbnRlcihjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzXG4gICAgICAuZ2V0KGNpcmNsZSlcbiAgICAgIC50aGVuKChjKSA9PlxuICAgICAgICBjLnNldENlbnRlcih7IGxhdDogY2lyY2xlLmxhdGl0dWRlLCBsbmc6IGNpcmNsZS5sb25naXR1ZGUgfSlcbiAgICAgICk7XG4gIH1cblxuICBzZXRFZGl0YWJsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzXG4gICAgICAuZ2V0KGNpcmNsZSlcbiAgICAgIC50aGVuKChjKSA9PiBjLnNldEVkaXRhYmxlKGNpcmNsZS5lZGl0YWJsZSkpO1xuICB9XG5cbiAgc2V0RHJhZ2dhYmxlKGNpcmNsZTogQWdtQ2lyY2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXNcbiAgICAgIC5nZXQoY2lyY2xlKVxuICAgICAgLnRoZW4oKGMpID0+IGMuc2V0RHJhZ2dhYmxlKGNpcmNsZS5kcmFnZ2FibGUpKTtcbiAgfVxuXG4gIHNldFZpc2libGUoY2lyY2xlOiBBZ21DaXJjbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiBjLnNldFZpc2libGUoY2lyY2xlLnZpc2libGUpKTtcbiAgfVxuXG4gIHNldFJhZGl1cyhjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oKGMpID0+IGMuc2V0UmFkaXVzKGNpcmNsZS5yYWRpdXMpKTtcbiAgfVxuXG4gIGdldE5hdGl2ZUNpcmNsZShjaXJjbGU6IEFnbUNpcmNsZSk6IFByb21pc2U8Z29vZ2xlLm1hcHMuQ2lyY2xlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgY2lyY2xlOiBBZ21DaXJjbGVcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lcjogZ29vZ2xlLm1hcHMuTWFwc0V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKChjKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gYy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PlxuICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==