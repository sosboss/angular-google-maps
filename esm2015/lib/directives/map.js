import { isPlatformServer } from '@angular/common';
import { Component, ContentChildren, Directive, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { FitBoundsService } from '../services/fit-bounds';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { CircleManager } from '../services/managers/circle-manager';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { LayerManager } from '../services/managers/layer-manager';
import { MarkerManager } from '../services/managers/marker-manager';
import { PolygonManager } from '../services/managers/polygon-manager';
import { PolylineManager } from '../services/managers/polyline-manager';
import { RectangleManager } from '../services/managers/rectangle-manager';
import { DataLayerManager } from './../services/managers/data-layer-manager';
import { KmlLayerManager } from './../services/managers/kml-layer-manager';
import * as i0 from "@angular/core";
import * as i1 from "../services/google-maps-api-wrapper";
import * as i2 from "../services/fit-bounds";
const _c0 = ["*"];
export class AgmMapControl {
}
AgmMapControl.ɵfac = function AgmMapControl_Factory(t) { return new (t || AgmMapControl)(); };
AgmMapControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmMapControl, inputs: { position: "position" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmMapControl, [{
        type: Directive
    }], null, { position: [{
            type: Input
        }] }); })();
export class AgmFullscreenControl extends AgmMapControl {
    getOptions() {
        return {
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmFullscreenControl.ɵfac = function AgmFullscreenControl_Factory(t) { return ɵAgmFullscreenControl_BaseFactory(t || AgmFullscreenControl); };
AgmFullscreenControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmFullscreenControl, selectors: [["agm-fullscreen-control"]], features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmFullscreenControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmFullscreenControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmFullscreenControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-fullscreen-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmFullscreenControl }],
            }]
    }], null, null); })();
export class AgmMapTypeControl extends AgmMapControl {
    getOptions() {
        return {
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.MapTypeControlStyle[this.style],
                mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(mapTypeId => google.maps.MapTypeId[mapTypeId]),
            },
        };
    }
}
AgmMapTypeControl.ɵfac = function AgmMapTypeControl_Factory(t) { return ɵAgmMapTypeControl_BaseFactory(t || AgmMapTypeControl); };
AgmMapTypeControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmMapTypeControl, selectors: [["agm-map-type-control"]], inputs: { mapTypeIds: "mapTypeIds", style: "style" }, features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmMapTypeControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmMapTypeControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmMapTypeControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-map-type-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmMapTypeControl }],
            }]
    }], null, { mapTypeIds: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
export class AgmPanControl extends AgmMapControl {
    getOptions() {
        return {
            panControl: true,
            panControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmPanControl.ɵfac = function AgmPanControl_Factory(t) { return ɵAgmPanControl_BaseFactory(t || AgmPanControl); };
AgmPanControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmPanControl, selectors: [["agm-pan-control"]], features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmPanControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmPanControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmPanControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmPanControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-pan-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmPanControl }],
            }]
    }], null, null); })();
export class AgmRotateControl extends AgmMapControl {
    getOptions() {
        return {
            rotateControl: true,
            rotateControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmRotateControl.ɵfac = function AgmRotateControl_Factory(t) { return ɵAgmRotateControl_BaseFactory(t || AgmRotateControl); };
AgmRotateControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmRotateControl, selectors: [["agm-rotate-control"]], features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmRotateControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmRotateControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmRotateControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmRotateControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-rotate-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmRotateControl }],
            }]
    }], null, null); })();
export class AgmScaleControl extends AgmMapControl {
    getOptions() {
        return {
            scaleControl: true,
        };
    }
}
AgmScaleControl.ɵfac = function AgmScaleControl_Factory(t) { return ɵAgmScaleControl_BaseFactory(t || AgmScaleControl); };
AgmScaleControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmScaleControl, selectors: [["agm-scale-control"]], features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmScaleControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmScaleControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmScaleControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmScaleControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-scale-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmScaleControl }],
            }]
    }], null, null); })();
export class AgmStreetViewControl extends AgmMapControl {
    getOptions() {
        return {
            streetViewControl: true,
            streetViewControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmStreetViewControl.ɵfac = function AgmStreetViewControl_Factory(t) { return ɵAgmStreetViewControl_BaseFactory(t || AgmStreetViewControl); };
AgmStreetViewControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmStreetViewControl, selectors: [["agm-street-view-control"]], features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmStreetViewControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmStreetViewControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmStreetViewControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-street-view-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmStreetViewControl }],
            }]
    }], null, null); })();
export class AgmZoomControl extends AgmMapControl {
    getOptions() {
        return {
            zoomControl: true,
            zoomControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.ZoomControlStyle[this.style],
            },
        };
    }
}
AgmZoomControl.ɵfac = function AgmZoomControl_Factory(t) { return ɵAgmZoomControl_BaseFactory(t || AgmZoomControl); };
AgmZoomControl.ɵdir = i0.ɵɵdefineDirective({ type: AgmZoomControl, selectors: [["agm-zoom-control"]], inputs: { style: "style" }, features: [i0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmZoomControl }]), i0.ɵɵInheritDefinitionFeature] });
const ɵAgmZoomControl_BaseFactory = i0.ɵɵgetInheritedFactory(AgmZoomControl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmZoomControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-zoom-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmZoomControl }],
            }]
    }], null, { style: [{
            type: Input
        }] }); })();
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
export class AgmMap {
    constructor(_elem, _mapsWrapper, 
    // tslint:disable-next-line: ban-types
    _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'ROADMAP';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
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
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        // tslint:disable-next-line: max-line-length
        this.mapClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new EventEmitter();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new EventEmitter();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new EventEmitter();
    }
    /** @internal */
    ngAfterContentInit() {
        if (isPlatformServer(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            mapTypeId: this.mapTypeId.toLocaleLowerCase(),
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
        this._handleControlChange();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // tslint:enable: no-string-literal
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        const newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(e => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([event]) => {
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (event.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(event);
            });
            this._observableSubscriptions.push(s);
        });
    }
    _handleControlChange() {
        this._setControls();
        this.mapControls.changes.subscribe(() => this._setControls());
    }
    _setControls() {
        const controlOptions = {
            fullscreenControl: !this.disableDefaultUI,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: !this.disableDefaultUI,
            zoomControl: !this.disableDefaultUI,
        };
        this.mapControls.forEach(control => Object.assign(controlOptions, control.getOptions()));
        this._mapsWrapper.setMapOptions(controlOptions);
    }
}
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons',
    'gestureHandling', 'tilt', 'restriction',
];
AgmMap.ɵfac = function AgmMap_Factory(t) { return new (t || AgmMap)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.GoogleMapsAPIWrapper), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i2.FitBoundsService), i0.ɵɵdirectiveInject(i0.NgZone)); };
AgmMap.ɵcmp = i0.ɵɵdefineComponent({ type: AgmMap, selectors: [["agm-map"]], contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, AgmMapControl, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControls = _t);
    } }, inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", draggable: ["mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", styles: "styles", usePanning: "usePanning", fitBounds: "fitBounds", fitBoundsPadding: "fitBoundsPadding", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, features: [i0.ɵɵProvidersFeature([
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]], template: function AgmMap_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmMap, [{
        type: Component,
        args: [{
                selector: 'agm-map',
                providers: [
                    CircleManager,
                    DataLayerManager,
                    DataLayerManager,
                    FitBoundsService,
                    GoogleMapsAPIWrapper,
                    InfoWindowManager,
                    KmlLayerManager,
                    LayerManager,
                    MarkerManager,
                    PolygonManager,
                    PolylineManager,
                    RectangleManager,
                ],
                styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `],
                template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.FitBoundsService }, { type: i0.NgZone }]; }, { longitude: [{
            type: Input
        }], latitude: [{
            type: Input
        }], zoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], controlSize: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['mapDraggable']
        }], disableDoubleClickZoom: [{
            type: Input
        }], disableDefaultUI: [{
            type: Input
        }], scrollwheel: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], draggableCursor: [{
            type: Input
        }], draggingCursor: [{
            type: Input
        }], keyboardShortcuts: [{
            type: Input
        }], styles: [{
            type: Input
        }], usePanning: [{
            type: Input
        }], fitBounds: [{
            type: Input
        }], fitBoundsPadding: [{
            type: Input
        }], mapTypeId: [{
            type: Input
        }], clickableIcons: [{
            type: Input
        }], showDefaultInfoWindow: [{
            type: Input
        }], gestureHandling: [{
            type: Input
        }], tilt: [{
            type: Input
        }], restriction: [{
            type: Input
        }], mapClick: [{
            type: Output
        }], mapRightClick: [{
            type: Output
        }], mapDblClick: [{
            type: Output
        }], centerChange: [{
            type: Output
        }], boundsChange: [{
            type: Output
        }], mapTypeIdChange: [{
            type: Output
        }], idle: [{
            type: Output
        }], zoomChange: [{
            type: Output
        }], mapReady: [{
            type: Output
        }], tilesLoaded: [{
            type: Output
        }], mapControls: [{
            type: ContentChildren,
            args: [AgmMapControl]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRzlNLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUszRSxNQUFNLE9BQWdCLGFBQWE7OzBFQUFiLGFBQWE7a0RBQWIsYUFBYTtrREFBYixhQUFhO2NBRGxDLFNBQVM7O2tCQUVQLEtBQUs7O0FBUVIsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFDckQs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QUs7bUJBQUMsY0FBYzs7a0JBS3BCLEtBQUs7O2tCQU1MLEtBQUs7O2tCQUtMLEtBQUs7O2tCQU1MLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQU9MLEtBQUs7O2tCQU1MLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQU1MLEtBQUs7O2tCQVFMLEtBQUs7O2tCQVVMLEtBQUs7O2tCQWdCTCxLQUFLOztrQkFNTCxLQUFLOztrQkFtQkwsTUFBTTs7a0JBTU4sTUFBTTs7a0JBTU4sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBTU4sTUFBTTs7a0JBS04sTUFBTTs7a0JBRU4sZUFBZTttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgUExBVEZPUk1fSUQsIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpdEJvdW5kc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgQ2lyY2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2NpcmNsZS1tYW5hZ2VyJztcbmltcG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG5pbXBvcnQgeyBMYXllck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyJztcbmltcG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlcic7XG5pbXBvcnQgeyBQb2x5Z29uTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlcic7XG5pbXBvcnQgeyBQb2x5bGluZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcbmltcG9ydCB7IFJlY3RhbmdsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9yZWN0YW5nbGUtbWFuYWdlcic7XG5pbXBvcnQgeyBEYXRhTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9kYXRhLWxheWVyLW1hbmFnZXInO1xuaW1wb3J0IHsgS21sTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlcic7XG5cbmV4cG9ydCB0eXBlIENvbnRyb2xQb3NpdGlvbiA9IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb247XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnbU1hcENvbnRyb2wge1xuICBASW5wdXQoKSBwb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uO1xuICBhYnN0cmFjdCBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz47XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXAgYWdtLWZ1bGxzY3JlZW4tY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbUZ1bGxzY3JlZW5Db250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21GdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIEFnbU1hcENvbnRyb2wge1xuICBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4ge1xuICAgIHJldHVybiB7XG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcbiAgICAgIGZ1bGxzY3JlZW5Db250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXAgYWdtLW1hcC10eXBlLWNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFnbU1hcENvbnRyb2wsIHVzZUV4aXN0aW5nOiBBZ21NYXBUeXBlQ29udHJvbCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdtTWFwVHlwZUNvbnRyb2wgZXh0ZW5kcyBBZ21NYXBDb250cm9sIHtcbiAgQElucHV0KCkgbWFwVHlwZUlkczogKGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5NYXBUeXBlSWQpW107XG4gIEBJbnB1dCgpIHN0eWxlOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuTWFwVHlwZUNvbnRyb2xTdHlsZTtcblxuICBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4ge1xuICAgIHJldHVybiB7XG4gICAgICBtYXBUeXBlQ29udHJvbDogdHJ1ZSxcbiAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlICYmIGdvb2dsZS5tYXBzLk1hcFR5cGVDb250cm9sU3R5bGVbdGhpcy5zdHlsZV0sXG4gICAgICAgIG1hcFR5cGVJZHM6IHRoaXMubWFwVHlwZUlkcyAmJiB0aGlzLm1hcFR5cGVJZHMubWFwKG1hcFR5cGVJZCA9PiBnb29nbGUubWFwcy5NYXBUeXBlSWRbbWFwVHlwZUlkXSksXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tcGFuLWNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFnbU1hcENvbnRyb2wsIHVzZUV4aXN0aW5nOiBBZ21QYW5Db250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21QYW5Db250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbCB7XG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhbkNvbnRyb2w6IHRydWUsXG4gICAgICBwYW5Db250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tcm90YXRlLWNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFnbU1hcENvbnRyb2wsIHVzZUV4aXN0aW5nOiBBZ21Sb3RhdGVDb250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21Sb3RhdGVDb250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbCB7XG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZUNvbnRyb2w6IHRydWUsXG4gICAgICByb3RhdGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tc2NhbGUtY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbVNjYWxlQ29udHJvbCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdtU2NhbGVDb250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbHtcbiAgZ2V0T3B0aW9ucygpOiBQYXJ0aWFsPGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxuICAgIH07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tc3RyZWV0LXZpZXctY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbVN0cmVldFZpZXdDb250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21TdHJlZXRWaWV3Q29udHJvbCBleHRlbmRzIEFnbU1hcENvbnRyb2wge1xuICBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZSxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tem9vbS1jb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBZ21NYXBDb250cm9sLCB1c2VFeGlzdGluZzogQWdtWm9vbUNvbnRyb2wgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbVpvb21Db250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbHtcbiAgQElucHV0KCkgc3R5bGU6IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlO1xuICBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4ge1xuICAgIHJldHVybiB7XG4gICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiAmJiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl0sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlICYmIGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGVbdGhpcy5zdHlsZV0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBBZ21NYXAgcmVuZGVycyBhIEdvb2dsZSBNYXAuXG4gKiAqKkltcG9ydGFudCBub3RlKio6IFRvIGJlIGFibGUgc2VlIGEgbWFwIGluIHRoZSBicm93c2VyLCB5b3UgaGF2ZSB0byBkZWZpbmUgYSBoZWlnaHQgZm9yIHRoZVxuICogZWxlbWVudCBgYWdtLW1hcGAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCcsXG4gIHByb3ZpZGVyczogW1xuICAgIENpcmNsZU1hbmFnZXIsXG4gICAgRGF0YUxheWVyTWFuYWdlcixcbiAgICBEYXRhTGF5ZXJNYW5hZ2VyLFxuICAgIEZpdEJvdW5kc1NlcnZpY2UsXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIsXG4gICAgSW5mb1dpbmRvd01hbmFnZXIsXG4gICAgS21sTGF5ZXJNYW5hZ2VyLFxuICAgIExheWVyTWFuYWdlcixcbiAgICBNYXJrZXJNYW5hZ2VyLFxuICAgIFBvbHlnb25NYW5hZ2VyLFxuICAgIFBvbHlsaW5lTWFuYWdlcixcbiAgICBSZWN0YW5nbGVNYW5hZ2VyLFxuICBdLFxuICBzdHlsZXM6IFtgXG4gICAgLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgICAuYWdtLW1hcC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRhaW5lci1pbm5lciBzZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyLWlubmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWdtLW1hcC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbG9uZ2l0dWRlIHRoYXQgZGVmaW5lcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAuXG4gICAqL1xuICBASW5wdXQoKSBsb25naXR1ZGUgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIGxhdGl0dWRlID0gMDtcblxuICAvKipcbiAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC4gVGhlIGRlZmF1bHQgem9vbSBsZXZlbCBpcyA4LlxuICAgKi9cbiAgQElucHV0KCkgem9vbSA9IDg7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXG4gICAqIGFyZSBlbmZvcmNlZC5cbiAgICovXG4gIEBJbnB1dCgpIG1pblpvb206IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICogYXJlIGVuZm9yY2VkLlxuICAgKi9cbiAgQElucHV0KCkgbWF4Wm9vbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbCBzaXplIGZvciB0aGUgZGVmYXVsdCBtYXAgY29udHJvbHMuIE9ubHkgZ292ZXJucyB0aGUgY29udHJvbHMgbWFkZSBieSB0aGUgTWFwcyBBUEkgaXRzZWxmXG4gICAqL1xuICBASW5wdXQoKSBjb250cm9sU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIGlmIG1hcCBpcyBkcmFnZ2FibGUuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWFwRHJhZ2dhYmxlJykgZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyB6b29tIGFuZCBjZW50ZXIgb24gZG91YmxlIGNsaWNrLiBFbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlRG91YmxlQ2xpY2tab29tID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgYWxsIGRlZmF1bHQgVUkgb2YgdGhlIEdvb2dsZSBtYXAuIFBsZWFzZSBub3RlOiBXaGVuIHRoZSBtYXAgaXMgY3JlYXRlZCwgdGhpc1xuICAgKiB2YWx1ZSBjYW5ub3QgZ2V0IHVwZGF0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlRGVmYXVsdFVJID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBkaXNhYmxlcyBzY3JvbGx3aGVlbCB6b29taW5nIG9uIHRoZSBtYXAuIFRoZSBzY3JvbGx3aGVlbCBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBzY3JvbGx3aGVlbCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIENvbG9yIHVzZWQgZm9yIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBNYXAgZGl2LiBUaGlzIGNvbG9yIHdpbGwgYmUgdmlzaWJsZSB3aGVuIHRpbGVzIGhhdmUgbm90XG4gICAqIHlldCBsb2FkZWQgYXMgdGhlIHVzZXIgcGFucy4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgc2V0IHdoZW4gdGhlIG1hcCBpcyBpbml0aWFsaXplZC5cbiAgICovXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvciB1cmwgb2YgdGhlIGN1cnNvciB0byBkaXNwbGF5IHdoZW4gbW91c2luZyBvdmVyIGEgZHJhZ2dhYmxlIG1hcC4gVGhpcyBwcm9wZXJ0eSB1c2VzXG4gICAqIHRoZSBjc3MgICogY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdFxuICAgKiBsZWFzdCBvbmUgZmFsbGJhY2sgY3Vyc29yIHRoYXQgaXMgbm90IGEgVVJMLiBGb3IgZXhhbXBsZTpcbiAgICogW2RyYWdnYWJsZUN1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgKi9cbiAgQElucHV0KCkgZHJhZ2dhYmxlQ3Vyc29yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9yIHVybCBvZiB0aGUgY3Vyc29yIHRvIGRpc3BsYXkgd2hlbiB0aGUgbWFwIGlzIGJlaW5nIGRyYWdnZWQuIFRoaXMgcHJvcGVydHkgdXNlcyB0aGVcbiAgICogY3NzIGN1cnNvciBhdHRyaWJ1dGUgdG8gY2hhbmdlIHRoZSBpY29uLiBBcyB3aXRoIHRoZSBjc3MgcHJvcGVydHksIHlvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3RcbiAgICogb25lIGZhbGxiYWNrIGN1cnNvciB0aGF0IGlzIG5vdCBhIFVSTC4gRm9yIGV4YW1wbGU6XG4gICAqIFtkcmFnZ2luZ0N1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgKi9cbiAgQElucHV0KCkgZHJhZ2dpbmdDdXJzb3I6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgKiBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBASW5wdXQoKSBrZXlib2FyZFNob3J0Y3V0cyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0byBhcHBseSB0byBlYWNoIG9mIHRoZSBkZWZhdWx0IG1hcCB0eXBlcy4gTm90ZSB0aGF0IGZvciBTYXRlbGxpdGUvSHlicmlkIGFuZCBUZXJyYWluXG4gICAqIG1vZGVzLCB0aGVzZSBzdHlsZXMgd2lsbCBvbmx5IGFwcGx5IHRvIGxhYmVscyBhbmQgZ2VvbWV0cnkuXG4gICAqL1xuICBASW5wdXQoKSBzdHlsZXM6IGdvb2dsZS5tYXBzLk1hcFR5cGVTdHlsZVtdID0gW107XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSBhbmQgdGhlIGxhdGl0dWRlIGFuZC9vciBsb25naXR1ZGUgdmFsdWVzIGNoYW5nZXMsIHRoZSBHb29nbGUgTWFwcyBwYW5UbyBtZXRob2QgaXNcbiAgICogdXNlZCB0b1xuICAgKiBjZW50ZXIgdGhlIG1hcC4gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwXG4gICAqL1xuICBASW5wdXQoKSB1c2VQYW5uaW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZpZXdwb3J0IHRvIGNvbnRhaW4gdGhlIGdpdmVuIGJvdW5kcy5cbiAgICogSWYgdGhpcyBvcHRpb24gdG8gYHRydWVgLCB0aGUgYm91bmRzIGdldCBhdXRvbWF0aWNhbGx5IGNvbXB1dGVkIGZyb20gYWxsIGVsZW1lbnRzIHRoYXQgdXNlIHRoZSB7QGxpbmsgQWdtRml0Qm91bmRzfSBkaXJlY3RpdmUuXG4gICAqL1xuICBASW5wdXQoKSBmaXRCb3VuZHM6IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWwgfCBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBhZGRpbmcgYW1vdW50IGZvciB0aGUgYm91bmRzLlxuICAgKi9cbiAgQElucHV0KCkgZml0Qm91bmRzUGFkZGluZzogbnVtYmVyIHwgZ29vZ2xlLm1hcHMuUGFkZGluZztcblxuICAvKipcbiAgICogVGhlIG1hcCBtYXBUeXBlSWQuIERlZmF1bHRzIHRvICdyb2FkbWFwJy5cbiAgICovXG4gIEBJbnB1dCgpIG1hcFR5cGVJZDoga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLk1hcFR5cGVJZCA9ICdST0FETUFQJztcblxuICAvKipcbiAgICogV2hlbiBmYWxzZSwgbWFwIGljb25zIGFyZSBub3QgY2xpY2thYmxlLiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCxcbiAgICogYWxzbyBrbm93biBhcyBhIFBPSS4gQnkgZGVmYXVsdCBtYXAgaWNvbnMgYXJlIGNsaWNrYWJsZS5cbiAgICovXG4gIEBJbnB1dCgpIGNsaWNrYWJsZUljb25zID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsIGFsc28ga25vd24gYXMgYSBQT0kuXG4gICAqIFdoZW4gbWFwIGljb25zIGFyZSBjbGlja2FibGUgYnkgZGVmYXVsdCwgYW4gaW5mbyB3aW5kb3cgaXMgZGlzcGxheWVkLlxuICAgKiBXaGVuIHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIGZhbHNlLCB0aGUgaW5mbyB3aW5kb3cgd2lsbCBub3QgYmUgc2hvd24gYnV0IHRoZSBjbGljayBldmVudFxuICAgKiB3aWxsIHN0aWxsIGZpcmVcbiAgICovXG4gIEBJbnB1dCgpIHNob3dEZWZhdWx0SW5mb1dpbmRvdyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoaXMgc2V0dGluZyBjb250cm9scyBob3cgZ2VzdHVyZXMgb24gdGhlIG1hcCBhcmUgaGFuZGxlZC5cbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIC0gJ2Nvb3BlcmF0aXZlJyAoVHdvLWZpbmdlciB0b3VjaCBnZXN0dXJlcyBwYW4gYW5kIHpvb20gdGhlIG1hcC4gT25lLWZpbmdlciB0b3VjaCBnZXN0dXJlcyBhcmUgbm90IGhhbmRsZWQgYnkgdGhlIG1hcC4pXG4gICAqIC0gJ2dyZWVkeScgICAgICAoQWxsIHRvdWNoIGdlc3R1cmVzIHBhbiBvciB6b29tIHRoZSBtYXAuKVxuICAgKiAtICdub25lJyAgICAgICAgKFRoZSBtYXAgY2Fubm90IGJlIHBhbm5lZCBvciB6b29tZWQgYnkgdXNlciBnZXN0dXJlcy4pXG4gICAqIC0gJ2F1dG8nICAgICAgICBbZGVmYXVsdF0gKEdlc3R1cmUgaGFuZGxpbmcgaXMgZWl0aGVyIGNvb3BlcmF0aXZlIG9yIGdyZWVkeSwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHBhZ2UgaXMgc2Nyb2xsYWJsZSBvciBub3QuXG4gICAqL1xuICBASW5wdXQoKSBnZXN0dXJlSGFuZGxpbmc6IGdvb2dsZS5tYXBzLkdlc3R1cmVIYW5kbGluZ09wdGlvbnMgPSAnYXV0byc7XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB0aGUgYXV0b21hdGljIHN3aXRjaGluZyBiZWhhdmlvciBmb3IgdGhlIGFuZ2xlIG9mIGluY2lkZW5jZSBvZlxuICAgICAqIHRoZSBtYXAuIFRoZSBvbmx5IGFsbG93ZWQgdmFsdWVzIGFyZSAwIGFuZCA0NS4gVGhlIHZhbHVlIDAgY2F1c2VzIHRoZSBtYXBcbiAgICAgKiB0byBhbHdheXMgdXNlIGEgMMKwIG92ZXJoZWFkIHZpZXcgcmVnYXJkbGVzcyBvZiB0aGUgem9vbSBsZXZlbCBhbmRcbiAgICAgKiB2aWV3cG9ydC4gVGhlIHZhbHVlIDQ1IGNhdXNlcyB0aGUgdGlsdCBhbmdsZSB0byBhdXRvbWF0aWNhbGx5IHN3aXRjaCB0b1xuICAgICAqIDQ1IHdoZW5ldmVyIDQ1wrAgaW1hZ2VyeSBpcyBhdmFpbGFibGUgZm9yIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgYW5kXG4gICAgICogdmlld3BvcnQsIGFuZCBzd2l0Y2ggYmFjayB0byAwIHdoZW5ldmVyIDQ1wrAgaW1hZ2VyeSBpcyBub3QgYXZhaWxhYmxlXG4gICAgICogKHRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IpLiA0NcKwIGltYWdlcnkgaXMgb25seSBhdmFpbGFibGUgZm9yXG4gICAgICogc2F0ZWxsaXRlIGFuZCBoeWJyaWQgbWFwIHR5cGVzLCB3aXRoaW4gc29tZSBsb2NhdGlvbnMsIGFuZCBhdCBzb21lIHpvb21cbiAgICAgKiBsZXZlbHMuIE5vdGU6IGdldFRpbHQgcmV0dXJucyB0aGUgY3VycmVudCB0aWx0IGFuZ2xlLCBub3QgdGhlIHZhbHVlXG4gICAgICogc3BlY2lmaWVkIGJ5IHRoaXMgb3B0aW9uLiBCZWNhdXNlIGdldFRpbHQgYW5kIHRoaXMgb3B0aW9uIHJlZmVyIHRvXG4gICAgICogZGlmZmVyZW50IHRoaW5ncywgZG8gbm90IGJpbmQoKSB0aGUgdGlsdCBwcm9wZXJ0eTsgZG9pbmcgc28gbWF5IHlpZWxkXG4gICAgICogdW5wcmVkaWN0YWJsZSBlZmZlY3RzLiAoRGVmYXVsdCBvZiBBR00gaXMgMCAoZGlzYWJsZWQpLiBFbmFibGUgaXQgd2l0aCB2YWx1ZSA0NS4pXG4gICAgICovXG4gIEBJbnB1dCgpIHRpbHQgPSAwO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciByZXN0cmljdGluZyB0aGUgYm91bmRzIG9mIHRoZSBtYXAuXG4gICAqIFVzZXIgY2Fubm90IHBhbiBvciB6b29tIGF3YXkgZnJvbSByZXN0cmljdGVkIGFyZWEuXG4gICAqL1xuICBASW5wdXQoKSByZXN0cmljdGlvbjogZ29vZ2xlLm1hcHMuTWFwUmVzdHJpY3Rpb247XG5cbiAgLyoqXG4gICAqIE1hcCBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGNhbiBjaGFuZ2Ugb3ZlciB0aW1lXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9uc0F0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdkaXNhYmxlRG91YmxlQ2xpY2tab29tJywgJ3Njcm9sbHdoZWVsJywgJ2RyYWdnYWJsZScsICdkcmFnZ2FibGVDdXJzb3InLCAnZHJhZ2dpbmdDdXJzb3InLFxuICAgICdrZXlib2FyZFNob3J0Y3V0cycsICdzdHlsZXMnLCAnem9vbScsICdtaW5ab29tJywgJ21heFpvb20nLCAnbWFwVHlwZUlkJywgJ2NsaWNrYWJsZUljb25zJyxcbiAgICAnZ2VzdHVyZUhhbmRsaW5nJywgJ3RpbHQnLCAncmVzdHJpY3Rpb24nLFxuICBdO1xuXG4gIHByaXZhdGUgX29ic2VydmFibGVTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9maXRCb3VuZHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGljayBvbiBhXG4gICAqIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gIEBPdXRwdXQoKSBtYXBDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQgfCBnb29nbGUubWFwcy5JY29uTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQgfCBnb29nbGUubWFwcy5JY29uTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHJpZ2h0LWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xuICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBSaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcERibENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgY2VudGVyIGNoYW5nZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlld3BvcnQgYm91bmRzIGhhdmUgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdCb3VuZHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdCb3VuZHM+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwVHlwZUlkIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwVHlwZUlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTWFwVHlwZUlkPiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTWFwVHlwZUlkPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBiZWNvbWVzIGlkbGUgYWZ0ZXIgcGFubmluZyBvciB6b29taW5nLlxuICAgKi9cbiAgQE91dHB1dCgpIGlkbGU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB6b29tIGxldmVsIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHpvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgZ29vZ2xlIG1hcCBpcyBmdWxseSBpbml0aWFsaXplZC5cbiAgICogWW91IGdldCB0aGUgZ29vZ2xlLm1hcHMuTWFwIGluc3RhbmNlIGFzIGEgcmVzdWx0IG9mIHRoaXMgRXZlbnRFbWl0dGVyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHZpc2libGUgdGlsZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLlxuICAgKi9cbiAgQE91dHB1dCgpIHRpbGVzTG9hZGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBZ21NYXBDb250cm9sKSBtYXBDb250cm9sczogUXVlcnlMaXN0PEFnbU1hcENvbnRyb2w+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBfZml0Qm91bmRzU2VydmljZTogRml0Qm91bmRzU2VydmljZSxcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBUaGUgY29kZSBpcyBydW5uaW5nIG9uIHRoZSBzZXJ2ZXIsIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdG9kbzogdGhpcyBzaG91bGQgYmUgc29sdmVkIHdpdGggYSBuZXcgY29tcG9uZW50IGFuZCBhIHZpZXdDaGlsZCBkZWNvcmF0b3JcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1tYXAtY29udGFpbmVyLWlubmVyJyk7XG4gICAgdGhpcy5faW5pdE1hcEluc3RhbmNlKGNvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIF9pbml0TWFwSW5zdGFuY2UoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlTWFwKGVsLCB7XG4gICAgICBjZW50ZXI6IHtsYXQ6IHRoaXMubGF0aXR1ZGUgfHwgMCwgbG5nOiB0aGlzLmxvbmdpdHVkZSB8fCAwfSxcbiAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgIGNvbnRyb2xTaXplOiB0aGlzLmNvbnRyb2xTaXplLFxuICAgICAgZGlzYWJsZURlZmF1bHRVSTogdGhpcy5kaXNhYmxlRGVmYXVsdFVJLFxuICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdGhpcy5kaXNhYmxlRG91YmxlQ2xpY2tab29tLFxuICAgICAgc2Nyb2xsd2hlZWw6IHRoaXMuc2Nyb2xsd2hlZWwsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgIGRyYWdnYWJsZUN1cnNvcjogdGhpcy5kcmFnZ2FibGVDdXJzb3IsXG4gICAgICBkcmFnZ2luZ0N1cnNvcjogdGhpcy5kcmFnZ2luZ0N1cnNvcixcbiAgICAgIGtleWJvYXJkU2hvcnRjdXRzOiB0aGlzLmtleWJvYXJkU2hvcnRjdXRzLFxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgIG1hcFR5cGVJZDogdGhpcy5tYXBUeXBlSWQudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgIGNsaWNrYWJsZUljb25zOiB0aGlzLmNsaWNrYWJsZUljb25zLFxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiB0aGlzLmdlc3R1cmVIYW5kbGluZyxcbiAgICAgIHRpbHQ6IHRoaXMudGlsdCxcbiAgICAgIHJlc3RyaWN0aW9uOiB0aGlzLnJlc3RyaWN0aW9uLFxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKSlcbiAgICAgIC50aGVuKG1hcCA9PiB0aGlzLm1hcFJlYWR5LmVtaXQobWFwKSk7XG5cbiAgICAvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLl9oYW5kbGVNYXBDZW50ZXJDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVNYXBab29tQ2hhbmdlKCk7XG4gICAgdGhpcy5faGFuZGxlTWFwTW91c2VFdmVudHMoKTtcbiAgICB0aGlzLl9oYW5kbGVCb3VuZHNDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVNYXBUeXBlSWRDaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVUaWxlc0xvYWRlZEV2ZW50KCk7XG4gICAgdGhpcy5faGFuZGxlSWRsZUV2ZW50KCk7XG4gICAgdGhpcy5faGFuZGxlQ29udHJvbENoYW5nZSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuXG4gICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgbWFwIGluc3RhbmNlXG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuY2xlYXJJbnN0YW5jZUxpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5fdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oY2hhbmdlcyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgb3B0aW9uczoge1twcm9wTmFtZTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGNvbnN0IG9wdGlvbktleXMgPVxuICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGsgPT4gQWdtTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7IG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0TWFwT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhIHJlc2l6ZSBldmVudCBvbiB0aGUgZ29vZ2xlIG1hcCBpbnN0YW5jZS5cbiAgICogV2hlbiByZWNlbnRlciBpcyB0cnVlLCB0aGUgb2YgdGhlIGdvb2dsZSBtYXAgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBsYXQvbG5nIHZhbHVlcyBvciBmaXRCb3VuZHMgdmFsdWUgdG8gcmVjZW50ZXIgdGhlIG1hcC5cbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBnZXRzIHJlc29sdmVkIGFmdGVyIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkLlxuICAgKi9cbiAgdHJpZ2dlclJlc2l6ZShyZWNlbnRlcjogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBOb3RlOiBXaGVuIHdlIHdvdWxkIHRyaWdnZXIgdGhlIHJlc2l6ZSBldmVudCBhbmQgc2hvdyB0aGUgbWFwIGluIHRoZSBzYW1lIHR1cm4gKHdoaWNoIGlzIGFcbiAgICAvLyBjb21tb24gY2FzZSBmb3IgdHJpZ2dlcmluZyBhIHJlc2l6ZSBldmVudCksIHRoZW4gdGhlIHJlc2l6ZSBldmVudCB3b3VsZCBub3RcbiAgICAvLyB3b3JrICh0byBzaG93IHRoZSBtYXApLCBzbyB3ZSB0cmlnZ2VyIHRoZSBldmVudCBpbiBhIHRpbWVvdXQuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcHNXcmFwcGVyLnRyaWdnZXJNYXBFdmVudCgncmVzaXplJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlY2VudGVyKSB7XG4gICAgICAgICAgICB0aGlzLmZpdEJvdW5kcyAhPSBudWxsID8gdGhpcy5fZml0Qm91bmRzKCkgOiB0aGlzLl9zZXRDZW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9zaXRpb24oY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddID09IG51bGwgJiYgY2hhbmdlc1snbG9uZ2l0dWRlJ10gPT0gbnVsbCAmJlxuICAgICAgICAhY2hhbmdlc1snZml0Qm91bmRzJ10pIHtcbiAgICAgIC8vIG5vIHBvc2l0aW9uIHVwZGF0ZSBuZWVkZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcblxuICAgIC8vIHdlIHByZWZlciBmaXRCb3VuZHMgaW4gY2hhbmdlc1xuICAgIGlmICgnZml0Qm91bmRzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9maXRCb3VuZHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMubGF0aXR1ZGUgIT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzLmxvbmdpdHVkZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0Q2VudGVyKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3Q2VudGVyID0ge1xuICAgICAgbGF0OiB0aGlzLmxhdGl0dWRlLFxuICAgICAgbG5nOiB0aGlzLmxvbmdpdHVkZSxcbiAgICB9O1xuICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnBhblRvKG5ld0NlbnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldENlbnRlcihuZXdDZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpdEJvdW5kcygpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZml0Qm91bmRzKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZVRvRml0Qm91bmRzVXBkYXRlcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVCb3VuZHModGhpcy5maXRCb3VuZHMsIHRoaXMuZml0Qm91bmRzUGFkZGluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9GaXRCb3VuZHNVcGRhdGVzKCkge1xuICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uID0gdGhpcy5fZml0Qm91bmRzU2VydmljZS5nZXRCb3VuZHMkKCkuc3Vic2NyaWJlKGIgPT4ge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLl91cGRhdGVCb3VuZHMoYiwgdGhpcy5maXRCb3VuZHNQYWRkaW5nKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBkYXRlQm91bmRzKGJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzIHwgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbCwgcGFkZGluZz86IG51bWJlciB8IGdvb2dsZS5tYXBzLlBhZGRpbmcpIHtcbiAgICBpZiAoIWJvdW5kcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNMYXRMbmdCb3VuZHNMaXRlcmFsKGJvdW5kcykgJiYgdHlwZW9mIGdvb2dsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ29vZ2xlICYmIGdvb2dsZS5tYXBzICYmIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcykge1xuICAgICAgY29uc3QgbmV3Qm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgbmV3Qm91bmRzLnVuaW9uKGJvdW5kcyk7XG4gICAgICBib3VuZHMgPSBuZXdCb3VuZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnBhblRvQm91bmRzKGJvdW5kcywgcGFkZGluZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hcHNXcmFwcGVyLmZpdEJvdW5kcyhib3VuZHMsIHBhZGRpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNMYXRMbmdCb3VuZHNMaXRlcmFsKGJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzIHwgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBib3VuZHMgIT0gbnVsbCAmJiAoYm91bmRzIGFzIGFueSkuZXh0ZW5kID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYXBDZW50ZXJDaGFuZ2UoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQoJ2NlbnRlcl9jaGFuZ2VkJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldENlbnRlcigpLnRoZW4oKGNlbnRlcjogZ29vZ2xlLm1hcHMuTGF0TG5nKSA9PiB7XG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSBjZW50ZXIubGF0KCk7XG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gY2VudGVyLmxuZygpO1xuICAgICAgICB0aGlzLmNlbnRlckNoYW5nZS5lbWl0KHtsYXQ6IHRoaXMubGF0aXR1ZGUsIGxuZzogdGhpcy5sb25naXR1ZGV9IGFzIGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJvdW5kc0NoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnYm91bmRzX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Qm91bmRzKCkudGhlbihcbiAgICAgICAgKGJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKSA9PiB7IHRoaXMuYm91bmRzQ2hhbmdlLmVtaXQoYm91bmRzKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcFR5cGVJZENoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnbWFwdHlwZWlkX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TWFwVHlwZUlkKCkudGhlbihcbiAgICAgICAgKG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkKSA9PiB7IHRoaXMubWFwVHlwZUlkQ2hhbmdlLmVtaXQobWFwVHlwZUlkKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcFpvb21DaGFuZ2UoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQoJ3pvb21fY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRab29tKCkudGhlbigoejogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuem9vbSA9IHo7XG4gICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHopO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUlkbGVFdmVudCgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnaWRsZScpLnN1YnNjcmliZShcbiAgICAgICgpID0+IHsgdGhpcy5pZGxlLmVtaXQodm9pZCAwKTsgfSk7XG4gICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRpbGVzTG9hZGVkRXZlbnQoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQoJ3RpbGVzbG9hZGVkJykuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy50aWxlc0xvYWRlZC5lbWl0KHZvaWQgMCksXG4gICAgKTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwTW91c2VFdmVudHMoKSB7XG4gICAgdHlwZSBFdmVudCA9IHsgbmFtZTogJ3JpZ2h0Y2xpY2snIHwgJ2NsaWNrJyB8ICdkYmxjbGljaycsIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiB9O1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFtdID0gW1xuICAgICAge25hbWU6ICdjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwQ2xpY2t9LFxuICAgICAge25hbWU6ICdyaWdodGNsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBSaWdodENsaWNrfSxcbiAgICAgIHtuYW1lOiAnZGJsY2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcERibENsaWNrfSxcbiAgICBdO1xuXG4gICAgZXZlbnRzLmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudChlLm5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgKFtldmVudF0pID0+IHtcbiAgICAgICAgICAvLyB0aGUgcGxhY2VJZCB3aWxsIGJlIHVuZGVmaW5lZCBpbiBjYXNlIHRoZSBldmVudCB3YXMgbm90IGFuIEljb25Nb3VzZUV2ZW50IChnb29nbGUgdHlwZXMpXG4gICAgICAgICAgaWYgKCAoZXZlbnQgYXMgZ29vZ2xlLm1hcHMuSWNvbk1vdXNlRXZlbnQpLnBsYWNlSWQgJiYgIXRoaXMuc2hvd0RlZmF1bHRJbmZvV2luZG93KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuZW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUNvbnRyb2xDaGFuZ2UoKSB7XG4gICAgdGhpcy5fc2V0Q29udHJvbHMoKTtcbiAgICB0aGlzLm1hcENvbnRyb2xzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3NldENvbnRyb2xzKCkpO1xuICB9XG5cbiAgX3NldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xPcHRpb25zOiBQYXJ0aWFsPGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM+ID0ge1xuICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6ICF0aGlzLmRpc2FibGVEZWZhdWx0VUksXG4gICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgIHJvdGF0ZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiAhdGhpcy5kaXNhYmxlRGVmYXVsdFVJLFxuICAgICAgem9vbUNvbnRyb2w6ICF0aGlzLmRpc2FibGVEZWZhdWx0VUksXG4gICAgfTtcbiAgICB0aGlzLm1hcENvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiBPYmplY3QuYXNzaWduKGNvbnRyb2xPcHRpb25zLCBjb250cm9sLmdldE9wdGlvbnMoKSkpO1xuICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldE1hcE9wdGlvbnMoY29udHJvbE9wdGlvbnMpO1xuICB9XG59XG4iXX0=