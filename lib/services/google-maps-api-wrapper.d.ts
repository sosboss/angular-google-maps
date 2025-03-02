/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
export declare class GoogleMapsAPIWrapper {
    private _loader;
    private _zone;
    private _map;
    private _mapResolver;
    constructor(_loader: MapsAPILoader, _zone: NgZone);
    createMap(el: HTMLElement, mapOptions: google.maps.MapOptions): Promise<void>;
    setMapOptions(options: google.maps.MapOptions): void;
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options?: google.maps.MarkerOptions, addToMap?: boolean): Promise<google.maps.Marker>;
    createInfoWindow(options?: google.maps.InfoWindowOptions): Promise<google.maps.InfoWindow>;
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options: google.maps.CircleOptions): Promise<google.maps.Circle>;
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options: google.maps.RectangleOptions): Promise<google.maps.Rectangle>;
    createPolyline(options: google.maps.PolylineOptions): Promise<google.maps.Polyline>;
    createPolygon(options: google.maps.PolygonOptions): Promise<google.maps.Polygon>;
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options?: google.maps.Data.DataOptions): Promise<google.maps.Data>;
    /**
     * Creates a TransitLayer instance for a map
     * @returns a new transit layer object
     */
    createTransitLayer(): Promise<google.maps.TransitLayer>;
    /**
     * Creates a BicyclingLayer instance for a map
     * @returns a new bicycling layer object
     */
    createBicyclingLayer(): Promise<google.maps.BicyclingLayer>;
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng: google.maps.LatLng, polygon: google.maps.Polygon): Promise<boolean>;
    subscribeToMapEvent<N extends keyof google.maps.MapHandlerMap>(eventName: N): Observable<google.maps.MapHandlerMap[N]>;
    clearInstanceListeners(): void;
    setCenter(latLng: google.maps.LatLngLiteral): Promise<void>;
    getZoom(): Promise<number>;
    getBounds(): Promise<google.maps.LatLngBounds>;
    getMapTypeId(): Promise<google.maps.MapTypeId>;
    setZoom(zoom: number): Promise<void>;
    getCenter(): Promise<google.maps.LatLng>;
    panTo(latLng: google.maps.LatLng | google.maps.LatLngLiteral): Promise<void>;
    panBy(x: number, y: number): Promise<void>;
    fitBounds(latLng: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding): Promise<void>;
    panToBounds(latLng: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding): Promise<void>;
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap(): Promise<google.maps.Map>;
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<GoogleMapsAPIWrapper, never>;
    static ɵprov: i0.ɵɵInjectableDef<GoogleMapsAPIWrapper>;
}
