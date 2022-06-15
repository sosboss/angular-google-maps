import { Injectable } from '@angular/core';
import { bindCallback, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { map, multicast, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
export class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new Observable(subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(map(() => this._createGeocoder()), multicast(new ReplaySubject(1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(switchMap((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = bindCallback(geocoder.geocode);
        return geocodeObservable(request).pipe(switchMap(([results, status]) => {
            if (status === google.maps.GeocoderStatus.OK) {
                return of(results);
            }
            return throwError(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
}
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) { return new (t || AgmGeocoder)(i0.ɵɵinject(i1.MapsAPILoader)); };
AgmGeocoder.ɵprov = i0.ɵɵdefineInjectable({ token: AgmGeocoder, factory: AgmGeocoder.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmGeocoder, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MapsAPILoader }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9nZW9jb2Rlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBeUIsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJM0QsTUFBTSxPQUFPLFdBQVc7SUFHdEIsWUFBWSxNQUFxQjtRQUMvQixNQUFNLG9CQUFvQixHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO2FBQ0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFDakMsU0FBUyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2UsQ0FBQztRQUVuRCxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtRQUMxRCx5REFBeUQ7UUFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQW9DO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3hCLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQThCLEVBQUUsT0FBb0M7UUFFNUYsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEI7WUFFRCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7c0VBeENVLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVcsbUJBREUsTUFBTTtrREFDbkIsV0FBVztjQUR2QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmluZENhbGxiYWNrLCBDb25uZWN0YWJsZU9ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCBSZXBsYXlTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG11bHRpY2FzdCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWdtR2VvY29kZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ2VvY29kZXIkOiBPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLkdlb2NvZGVyPjtcblxuICBjb25zdHJ1Y3Rvcihsb2FkZXI6IE1hcHNBUElMb2FkZXIpIHtcbiAgICBjb25zdCBjb25uZWN0YWJsZUdlb2NvZGVyJCA9IG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xuICAgICAgbG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHN1YnNjcmliZXIubmV4dCgpKTtcbiAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLl9jcmVhdGVHZW9jb2RlcigpKSxcbiAgICAgICAgbXVsdGljYXN0KG5ldyBSZXBsYXlTdWJqZWN0KDEpKSxcbiAgICAgICkgYXMgQ29ubmVjdGFibGVPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLkdlb2NvZGVyPjtcblxuICAgIGNvbm5lY3RhYmxlR2VvY29kZXIkLmNvbm5lY3QoKTsgLy8gaWdub3JlIHRoZSBzdWJzY3JpcHRpb25cbiAgICAvLyBzaW5jZSB3ZSB3aWxsIHJlbWFpbiBzdWJzY3JpYmVkIHRpbGwgYXBwbGljYXRpb24gZXhpdHNcblxuICAgIHRoaXMuZ2VvY29kZXIkID0gY29ubmVjdGFibGVHZW9jb2RlciQ7XG4gIH1cblxuICBnZW9jb2RlKHJlcXVlc3Q6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVxdWVzdCk6IE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmdlb2NvZGVyJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChnZW9jb2RlcikgPT4gdGhpcy5fZ2V0R29vZ2xlUmVzdWx0cyhnZW9jb2RlciwgcmVxdWVzdCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEdvb2dsZVJlc3VsdHMoZ2VvY29kZXI6IGdvb2dsZS5tYXBzLkdlb2NvZGVyLCByZXF1ZXN0OiBnb29nbGUubWFwcy5HZW9jb2RlclJlcXVlc3QpOlxuICAgICAgIE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHRbXT4ge1xuICAgIGNvbnN0IGdlb2NvZGVPYnNlcnZhYmxlID0gYmluZENhbGxiYWNrKGdlb2NvZGVyLmdlb2NvZGUpO1xuICAgIHJldHVybiBnZW9jb2RlT2JzZXJ2YWJsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcmVzdWx0cywgc3RhdHVzXSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgIHJldHVybiBvZihyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHN0YXR1cyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVHZW9jb2RlcigpIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gIH1cbn1cbiJdfQ==