/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmInfoWindow } from '../../directives/info-window';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { MarkerManager } from './marker-manager';
import * as i0 from "@angular/core";
export declare class InfoWindowManager {
    private _mapsWrapper;
    private _zone;
    private _markerManager;
    private _infoWindows;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone, _markerManager: MarkerManager);
    deleteInfoWindow(infoWindow: AgmInfoWindow): Promise<void>;
    setPosition(infoWindow: AgmInfoWindow): Promise<void>;
    setZIndex(infoWindow: AgmInfoWindow): Promise<void>;
    open(infoWindow: AgmInfoWindow): Promise<void>;
    close(infoWindow: AgmInfoWindow): Promise<void>;
    setOptions(infoWindow: AgmInfoWindow, options: google.maps.InfoWindowOptions): Promise<void>;
    addInfoWindow(infoWindow: AgmInfoWindow): void;
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable<T>(eventName: string, infoWindow: AgmInfoWindow): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDef<InfoWindowManager, never>;
    static ɵprov: i0.ɵɵInjectableDef<InfoWindowManager>;
}
