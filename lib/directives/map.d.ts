/// <reference types="googlemaps" />
import { AfterContentInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { FitBoundsService } from '../services/fit-bounds';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import * as i0 from "@angular/core";
export declare type ControlPosition = keyof typeof google.maps.ControlPosition;
export declare abstract class AgmMapControl {
    position: ControlPosition;
    abstract getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmMapControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmMapControl, never, never, { "position": "position"; }, {}, never>;
}
export declare class AgmFullscreenControl extends AgmMapControl {
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmFullscreenControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmFullscreenControl, "agm-map agm-fullscreen-control", never, {}, {}, never>;
}
export declare class AgmMapTypeControl extends AgmMapControl {
    mapTypeIds: (keyof typeof google.maps.MapTypeId)[];
    style: keyof typeof google.maps.MapTypeControlStyle;
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmMapTypeControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmMapTypeControl, "agm-map agm-map-type-control", never, { "mapTypeIds": "mapTypeIds"; "style": "style"; }, {}, never>;
}
export declare class AgmPanControl extends AgmMapControl {
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmPanControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmPanControl, "agm-map agm-pan-control", never, {}, {}, never>;
}
export declare class AgmRotateControl extends AgmMapControl {
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmRotateControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmRotateControl, "agm-map agm-rotate-control", never, {}, {}, never>;
}
export declare class AgmScaleControl extends AgmMapControl {
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmScaleControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmScaleControl, "agm-map agm-scale-control", never, {}, {}, never>;
}
export declare class AgmStreetViewControl extends AgmMapControl {
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmStreetViewControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmStreetViewControl, "agm-map agm-street-view-control", never, {}, {}, never>;
}
export declare class AgmZoomControl extends AgmMapControl {
    style: keyof typeof google.maps.ZoomControlStyle;
    getOptions(): Partial<google.maps.MapOptions>;
    static ɵfac: i0.ɵɵFactoryDef<AgmZoomControl, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmZoomControl, "agm-map agm-zoom-control", never, { "style": "style"; }, {}, never>;
}
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmMap implements OnChanges, AfterContentInit, OnDestroy {
    private _elem;
    private _mapsWrapper;
    private _platformId;
    protected _fitBoundsService: FitBoundsService;
    private _zone;
    /**
     * The longitude that defines the center of the map.
     */
    longitude: number;
    /**
     * The latitude that defines the center of the map.
     */
    latitude: number;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */
    zoom: number;
    /**
     * The minimal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    minZoom: number;
    /**
     * The maximal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    maxZoom: number;
    /**
     * The control size for the default map controls. Only governs the controls made by the Maps API itself
     */
    controlSize: number;
    /**
     * Enables/disables if map is draggable.
     */
    draggable: boolean;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */
    disableDoubleClickZoom: boolean;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */
    disableDefaultUI: boolean;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */
    scrollwheel: boolean;
    /**
     * Color used for the background of the Map div. This color will be visible when tiles have not
     * yet loaded as the user pans. This option can only be set when the map is initialized.
     */
    backgroundColor: string;
    /**
     * The name or url of the cursor to display when mousing over a draggable map. This property uses
     * the css  * cursor attribute to change the icon. As with the css property, you must specify at
     * least one fallback cursor that is not a URL. For example:
     * [draggableCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggableCursor: string;
    /**
     * The name or url of the cursor to display when the map is being dragged. This property uses the
     * css cursor attribute to change the icon. As with the css property, you must specify at least
     * one fallback cursor that is not a URL. For example:
     * [draggingCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggingCursor: string;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */
    keyboardShortcuts: boolean;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */
    styles: google.maps.MapTypeStyle[];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */
    usePanning: boolean;
    /**
     * Sets the viewport to contain the given bounds.
     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
     */
    fitBounds: google.maps.LatLngBoundsLiteral | google.maps.LatLngBounds | boolean;
    /**
     * Padding amount for the bounds.
     */
    fitBoundsPadding: number | google.maps.Padding;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */
    mapTypeId: keyof typeof google.maps.MapTypeId;
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */
    clickableIcons: boolean;
    /**
     * A map icon represents a point of interest, also known as a POI.
     * When map icons are clickable by default, an info window is displayed.
     * When this property is set to false, the info window will not be shown but the click event
     * will still fire
     */
    showDefaultInfoWindow: boolean;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */
    gestureHandling: google.maps.GestureHandlingOptions;
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
     */
    tilt: number;
    /**
     * Options for restricting the bounds of the map.
     * User cannot pan or zoom away from restricted area.
     */
    restriction: google.maps.MapRestriction;
    /**
     * Map option attributes that can change over time
     */
    private static _mapOptionsAttributes;
    private _observableSubscriptions;
    private _fitBoundsSubscription;
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */
    mapClick: EventEmitter<google.maps.MouseEvent | google.maps.IconMouseEvent>;
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapRightClick: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapDblClick: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event emitter is fired when the map center changes.
     */
    centerChange: EventEmitter<google.maps.LatLngLiteral>;
    /**
     * This event is fired when the viewport bounds have changed.
     */
    boundsChange: EventEmitter<google.maps.LatLngBounds>;
    /**
     * This event is fired when the mapTypeId property changes.
     */
    mapTypeIdChange: EventEmitter<google.maps.MapTypeId>;
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */
    idle: EventEmitter<void>;
    /**
     * This event is fired when the zoom level has changed.
     */
    zoomChange: EventEmitter<number>;
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */
    mapReady: EventEmitter<any>;
    /**
     * This event is fired when the visible tiles have finished loading.
     */
    tilesLoaded: EventEmitter<void>;
    mapControls: QueryList<AgmMapControl>;
    constructor(_elem: ElementRef, _mapsWrapper: GoogleMapsAPIWrapper, _platformId: Object, _fitBoundsService: FitBoundsService, _zone: NgZone);
    /** @internal */
    ngAfterContentInit(): void;
    private _initMapInstance;
    /** @internal */
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateMapOptionsChanges;
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter?: boolean): Promise<void>;
    private _updatePosition;
    private _setCenter;
    private _fitBounds;
    private _subscribeToFitBoundsUpdates;
    protected _updateBounds(bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding): void;
    private _isLatLngBoundsLiteral;
    private _handleMapCenterChange;
    private _handleBoundsChange;
    private _handleMapTypeIdChange;
    private _handleMapZoomChange;
    private _handleIdleEvent;
    private _handleTilesLoadedEvent;
    private _handleMapMouseEvents;
    _handleControlChange(): void;
    _setControls(): void;
    static ɵfac: i0.ɵɵFactoryDef<AgmMap, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AgmMap, "agm-map", never, { "longitude": "longitude"; "latitude": "latitude"; "zoom": "zoom"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; "controlSize": "controlSize"; "draggable": "mapDraggable"; "disableDoubleClickZoom": "disableDoubleClickZoom"; "disableDefaultUI": "disableDefaultUI"; "scrollwheel": "scrollwheel"; "backgroundColor": "backgroundColor"; "draggableCursor": "draggableCursor"; "draggingCursor": "draggingCursor"; "keyboardShortcuts": "keyboardShortcuts"; "styles": "styles"; "usePanning": "usePanning"; "fitBounds": "fitBounds"; "fitBoundsPadding": "fitBoundsPadding"; "mapTypeId": "mapTypeId"; "clickableIcons": "clickableIcons"; "showDefaultInfoWindow": "showDefaultInfoWindow"; "gestureHandling": "gestureHandling"; "tilt": "tilt"; "restriction": "restriction"; }, { "mapClick": "mapClick"; "mapRightClick": "mapRightClick"; "mapDblClick": "mapDblClick"; "centerChange": "centerChange"; "boundsChange": "boundsChange"; "mapTypeIdChange": "mapTypeIdChange"; "idle": "idle"; "zoomChange": "zoomChange"; "mapReady": "mapReady"; "tilesLoaded": "tilesLoaded"; }, ["mapControls"], ["*"]>;
}
