/// <reference types="googlemaps" />
import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { RectangleManager } from '../services/managers/rectangle-manager';
import * as i0 from "@angular/core";
export declare class AgmRectangle implements OnInit, OnChanges, OnDestroy {
    private _manager;
    /**
     * The north position of the rectangle (required).
     */
    north: number;
    /**
     * The east position of the rectangle (required).
     */
    east: number;
    /**
     * The south position of the rectangle (required).
     */
    south: number;
    /**
     * The west position of the rectangle (required).
     */
    west: number;
    /**
     * Indicates whether this Rectangle handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this rectangle over the map. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this rectangle by dragging the control points shown at
     * the center and around the circumference of the rectangle. Defaults to false.
     */
    editable: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named colors.
     */
    fillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0.
     */
    fillOpacity: number;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity: number;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    strokePosition: keyof typeof google.maps.StrokePosition;
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * Whether this rectangle is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the rectangle's is changed.
     */
    boundsChange: EventEmitter<google.maps.LatLngBoundsLiteral>;
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    rectangleClick: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    rectangleDblClick: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the rectangle.
     */
    drag: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the user stops dragging the rectangle.
     */
    dragEnd: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the user starts dragging the rectangle.
     */
    dragStart: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the rectangle.
     */
    mouseDown: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the rectangle.
     */
    mouseMove: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired on rectangle mouseout.
     */
    mouseOut: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired on rectangle mouseover.
     */
    mouseOver: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the DOM mouseup event is fired on the rectangle.
     */
    mouseUp: EventEmitter<google.maps.MouseEvent>;
    /**
     * This event is fired when the rectangle is right-clicked on.
     */
    rightClick: EventEmitter<google.maps.MouseEvent>;
    private _rectangleAddedToManager;
    private static _mapOptions;
    private _eventSubscriptions;
    constructor(_manager: RectangleManager);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _updateRectangleOptionsChanges;
    private _registerEventListeners;
    /** @internal */
    ngOnDestroy(): void;
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds(): Promise<google.maps.LatLngBounds>;
    static ɵfac: i0.ɵɵFactoryDef<AgmRectangle, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmRectangle, "agm-rectangle", never, { "north": "north"; "east": "east"; "south": "south"; "west": "west"; "clickable": "clickable"; "draggable": "rectangleDraggable"; "editable": "editable"; "fillColor": "fillColor"; "fillOpacity": "fillOpacity"; "strokeColor": "strokeColor"; "strokeOpacity": "strokeOpacity"; "strokePosition": "strokePosition"; "strokeWeight": "strokeWeight"; "visible": "visible"; "zIndex": "zIndex"; }, { "boundsChange": "boundsChange"; "rectangleClick": "rectangleClick"; "rectangleDblClick": "rectangleDblClick"; "drag": "drag"; "dragEnd": "dragEnd"; "dragStart": "dragStart"; "mouseDown": "mouseDown"; "mouseMove": "mouseMove"; "mouseOut": "mouseOut"; "mouseOver": "mouseOver"; "mouseUp": "mouseUp"; "rightClick": "rightClick"; }, never>;
}
