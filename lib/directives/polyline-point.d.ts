/// <reference types="googlemaps" />
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FitBoundsAccessor, FitBoundsDetails } from '../services/fit-bounds';
import * as i0 from "@angular/core";
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
export declare class AgmPolylinePoint implements OnChanges, FitBoundsAccessor {
    /**
     * The latitude position of the point.
     */
    latitude: number;
    /**
     * The longitude position of the point;
     */
    longitude: number;
    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    positionChanged: EventEmitter<google.maps.LatLngLiteral>;
    constructor();
    ngOnChanges(changes: SimpleChanges): any;
    /** @internal */
    getFitBoundsDetails$(): Observable<FitBoundsDetails>;
    static ɵfac: i0.ɵɵFactoryDef<AgmPolylinePoint, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmPolylinePoint, "agm-polyline-point", never, { "latitude": "latitude"; "longitude": "longitude"; }, { "positionChanged": "positionChanged"; }, never>;
}
