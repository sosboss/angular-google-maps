import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/rectangle-manager";
export class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        // tslint:enable: no-string-literal
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
}
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.ɵfac = function AgmRectangle_Factory(t) { return new (t || AgmRectangle)(i0.ɵɵdirectiveInject(i1.RectangleManager)); };
AgmRectangle.ɵdir = i0.ɵɵdefineDirective({ type: AgmRectangle, selectors: [["agm-rectangle"]], inputs: { north: "north", east: "east", south: "south", west: "west", clickable: "clickable", draggable: ["rectangleDraggable", "draggable"], editable: "editable", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { boundsChange: "boundsChange", rectangleClick: "rectangleClick", rectangleDblClick: "rectangleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", rightClick: "rightClick" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmRectangle, [{
        type: Directive,
        args: [{
                selector: 'agm-rectangle',
            }]
    }], function () { return [{ type: i1.RectangleManager }]; }, { north: [{
            type: Input
        }], east: [{
            type: Input
        }], south: [{
            type: Input
        }], west: [{
            type: Input
        }], clickable: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['rectangleDraggable']
        }], editable: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokePosition: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }], visible: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], boundsChange: [{
            type: Output
        }], rectangleClick: [{
            type: Output
        }], rectangleDblClick: [{
            type: Output
        }], drag: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], mouseDown: [{
            type: Output
        }], mouseMove: [{
            type: Output
        }], mouseOut: [{
            type: Output
        }], mouseOver: [{
            type: Output
        }], mouseUp: [{
            type: Output
        }], rightClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvcmVjdGFuZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7OztBQU92QixNQUFNLE9BQU8sWUFBWTtJQXNLdkIsWUFBb0IsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFqSjlDOztXQUVHO1FBQ00sY0FBUyxHQUFHLElBQUksQ0FBQztRQUUxQjs7V0FFRztRQUNILDJDQUEyQztRQUNkLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFL0M7OztXQUdHO1FBQ00sYUFBUSxHQUFHLEtBQUssQ0FBQztRQXNCMUI7OztXQUdHO1FBQ00sbUJBQWMsR0FBNEMsUUFBUSxDQUFDO1FBRTVFOztXQUVHO1FBQ00saUJBQVksR0FBRyxDQUFDLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBT3hCOztXQUVHO1FBRUgsaUJBQVksR0FBa0QsSUFBSSxZQUFZLEVBRTNFLENBQUM7UUFFSjs7V0FFRztRQUVILG1CQUFjLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRWxHOztXQUVHO1FBRUgsc0JBQWlCLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRXJHOztXQUVHO1FBQ0gsNkNBQTZDO1FBQ25DLFNBQUksR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFbEc7O1dBRUc7UUFDTyxZQUFPLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRXJHOztXQUVHO1FBRUgsY0FBUyxHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU3Rjs7V0FFRztRQUVILGNBQVMsR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFN0Y7O1dBRUc7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OztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFNTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxNQUFNOztrQkFRTixNQUFNOztrQkFNTixNQUFNOztrQkFPTixNQUFNOztrQkFLTixNQUFNOztrQkFLTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFLTixNQUFNOztrQkFNTixNQUFNOztrQkFLTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlY3RhbmdsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9yZWN0YW5nbGUtbWFuYWdlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1yZWN0YW5nbGUnLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21SZWN0YW5nbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBub3J0aCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAqL1xuICBASW5wdXQoKSBub3J0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZWFzdCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAqL1xuICBASW5wdXQoKSBlYXN0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3V0aCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAqL1xuICBASW5wdXQoKSBzb3V0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgd2VzdCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAqL1xuICBASW5wdXQoKSB3ZXN0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgUmVjdGFuZ2xlIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgcmVjdGFuZ2xlIG92ZXIgdGhlIG1hcC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgncmVjdGFuZ2xlRHJhZ2dhYmxlJykgZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIHJlY3RhbmdsZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXRcbiAgICogdGhlIGNlbnRlciBhbmQgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSByZWN0YW5nbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCkgZWRpdGFibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWxsIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBwb3NpdGlvbi4gRGVmYXVsdHMgdG8gQ0VOVEVSLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXQgRXhwbG9yZXIgOCBhbmQgZWFybGllci5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVBvc2l0aW9uOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuU3Ryb2tlUG9zaXRpb24gPSAnQ0VOVEVSJztcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VXZWlnaHQgPSAwO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcmVjdGFuZ2xlJ3MgaXMgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWN0YW5nbGVDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVjdGFuZ2xlRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGRyYWc6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG1vdXNlRG93bjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiByZWN0YW5nbGUgbW91c2VvdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiByZWN0YW5nbGUgbW91c2VvdmVyLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VVcDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHJlY3RhbmdsZSBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICBwcml2YXRlIF9yZWN0YW5nbGVBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3RhdGljIF9tYXBPcHRpb25zOiBzdHJpbmdbXSA9IFtcbiAgICAnZmlsbENvbG9yJyxcbiAgICAnZmlsbE9wYWNpdHknLFxuICAgICdzdHJva2VDb2xvcicsXG4gICAgJ3N0cm9rZU9wYWNpdHknLFxuICAgICdzdHJva2VQb3NpdGlvbicsXG4gICAgJ3N0cm9rZVdlaWdodCcsXG4gICAgJ3Zpc2libGUnLFxuICAgICd6SW5kZXgnLFxuICAgICdjbGlja2FibGUnLFxuICBdO1xuXG4gIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYW5hZ2VyOiBSZWN0YW5nbGVNYW5hZ2VyKSB7fVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbWFuYWdlci5hZGRSZWN0YW5nbGUodGhpcyk7XG4gICAgdGhpcy5fcmVjdGFuZ2xlQWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmICghdGhpcy5fcmVjdGFuZ2xlQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKFxuICAgICAgY2hhbmdlc1snbm9ydGgnXSB8fFxuICAgICAgY2hhbmdlc1snZWFzdCddIHx8XG4gICAgICBjaGFuZ2VzWydzb3V0aCddIHx8XG4gICAgICBjaGFuZ2VzWyd3ZXN0J11cbiAgICApIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0Qm91bmRzKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZWRpdGFibGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRFZGl0YWJsZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2RyYWdnYWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldERyYWdnYWJsZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRWaXNpYmxlKHRoaXMpO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIHRoaXMuX3VwZGF0ZVJlY3RhbmdsZU9wdGlvbnNDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmVjdGFuZ2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlczoge1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICB9KSB7XG4gICAgY29uc3Qgb3B0aW9uczogZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IG9wdGlvbktleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoXG4gICAgICBrID0+IEFnbVJlY3RhbmdsZS5fbWFwT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMSxcbiAgICApO1xuICAgIG9wdGlvbktleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25LZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGV2ZW50czogTWFwPHN0cmluZywgRXZlbnRFbWl0dGVyPGFueT4+ID0gbmV3IE1hcDxcbiAgICAgIHN0cmluZyxcbiAgICAgIEV2ZW50RW1pdHRlcjxhbnk+XG4gICAgPigpO1xuICAgIGV2ZW50cy5zZXQoJ2JvdW5kc19jaGFuZ2VkJywgdGhpcy5ib3VuZHNDaGFuZ2UpO1xuICAgIGV2ZW50cy5zZXQoJ2NsaWNrJywgdGhpcy5yZWN0YW5nbGVDbGljayk7XG4gICAgZXZlbnRzLnNldCgnZGJsY2xpY2snLCB0aGlzLnJlY3RhbmdsZURibENsaWNrKTtcbiAgICBldmVudHMuc2V0KCdkcmFnJywgdGhpcy5kcmFnKTtcbiAgICBldmVudHMuc2V0KCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kKTtcbiAgICBldmVudHMuc2V0KCdkcmFnU3RhcnQnLCB0aGlzLmRyYWdTdGFydCk7XG4gICAgZXZlbnRzLnNldCgnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW91dCcsIHRoaXMubW91c2VPdXQpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VPdmVyKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKTtcbiAgICBldmVudHMuc2V0KCdyaWdodGNsaWNrJywgdGhpcy5yaWdodENsaWNrKTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEVtaXR0ZXIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgIHRoaXMuX21hbmFnZXJcbiAgICAgICAgICAuY3JlYXRlRXZlbnRPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KGV2ZW50TmFtZSwgdGhpcylcbiAgICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2JvdW5kc19jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLmdldEJvdW5kcyh0aGlzKS50aGVuKGJvdW5kcyA9PlxuICAgICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBub3J0aDogYm91bmRzLmdldE5vcnRoRWFzdCgpLmxhdCgpLFxuICAgICAgICAgICAgICAgICAgICBlYXN0OiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubG5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNvdXRoOiBib3VuZHMuZ2V0U291dGhXZXN0KCkubGF0KCksXG4gICAgICAgICAgICAgICAgICAgIHdlc3Q6IGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmcoKSxcbiAgICAgICAgICAgICAgICAgIH0gYXMgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLl9tYW5hZ2VyLnJlbW92ZVJlY3RhbmdsZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBMYXRMbmdCb3VuZHMgb2YgdGhpcyBSZWN0YW5nbGUuXG4gICAqL1xuICBnZXRCb3VuZHMoKTogUHJvbWlzZTxnb29nbGUubWFwcy5MYXRMbmdCb3VuZHM+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFuYWdlci5nZXRCb3VuZHModGhpcyk7XG4gIH1cbn1cbiJdfQ==