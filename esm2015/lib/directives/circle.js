import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/circle-manager";
export class AgmCircle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
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
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        var rip = this._manager.addCircle(this);
        rip.then(() => {
            this._circleAddedToManager = true;
            this._registerEventListeners();
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
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
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        // tslint:enable: no-string-literal
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter((k) => AgmCircle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager
                            .getRadius(this)
                            .then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager
                            .getCenter(this)
                            .then((center) => eventEmitter.emit({
                            lat: center.lat(),
                            lng: center.lng(),
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
        this._eventSubscriptions.forEach((s) => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
    getCenter() {
        return this._manager.getCenter(this);
    }
}
AgmCircle._mapOptions = [
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
AgmCircle.ɵfac = function AgmCircle_Factory(t) { return new (t || AgmCircle)(i0.ɵɵdirectiveInject(i1.CircleManager)); };
AgmCircle.ɵdir = i0.ɵɵdefineDirective({ type: AgmCircle, selectors: [["agm-circle"]], inputs: { latitude: "latitude", longitude: "longitude", clickable: "clickable", draggable: ["circleDraggable", "draggable"], editable: "editable", fillColor: "fillColor", fillOpacity: "fillOpacity", radius: "radius", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { centerChange: "centerChange", circleClick: "circleClick", circleDblClick: "circleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", radiusChange: "radiusChange", rightClick: "rightClick" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmCircle, [{
        type: Directive,
        args: [{
                selector: 'agm-circle',
            }]
    }], function () { return [{ type: i1.CircleManager }]; }, { latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], clickable: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['circleDraggable']
        }], editable: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], radius: [{
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
        }], centerChange: [{
            type: Output
        }], circleClick: [{
            type: Output
        }], circleDblClick: [{
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
        }], radiusChange: [{
            type: Output
        }], rightClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvY2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7OztBQVF2QixNQUFNLE9BQU8sU0FBUztJQXdLcEIsWUFBb0IsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQTdKM0M7O1dBRUc7UUFDTSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTFCOztXQUVHO1FBQ0gsMkNBQTJDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFNUM7OztXQUdHO1FBQ00sYUFBUSxHQUFHLEtBQUssQ0FBQztRQVkxQjs7V0FFRztRQUNNLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFZcEI7OztXQUdHO1FBQ00sbUJBQWMsR0FBNEMsUUFBUSxDQUFDO1FBRTVFOztXQUVHO1FBQ00saUJBQVksR0FBRyxDQUFDLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBT3hCOztXQUVHO1FBQ08saUJBQVksR0FDcEIsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFFaEQ7O1dBRUc7UUFDTyxnQkFBVyxHQUNuQixJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU3Qzs7V0FFRztRQUNPLG1CQUFjLEdBQ3RCLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTdDOztXQUVHO1FBQ0gsNkNBQTZDO1FBQ25DLFNBQUksR0FDWixJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU3Qzs7V0FFRztRQUNPLFlBQU8sR0FDZixJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU3Qzs7V0FFRztRQUNPLGNBQVMsR0FDakIsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFN0M7O1dBRUc7UUFDTyxjQUFTLEdBQ2pCLElBQUks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QUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOztBQWxJYyxxQkFBVyxHQUFhO0lBQ3JDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztDQUNaLENBQUM7a0VBcEtTLFNBQVM7OENBQVQsU0FBUztrREFBVCxTQUFTO2NBSHJCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7a0JBS0UsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBTUwsS0FBSzttQkFBQyxpQkFBaUI7O2tCQU12QixLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFNTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFPTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFNTixNQUFNOztrQkFLTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2lyY2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2NpcmNsZS1tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLWNpcmNsZScsXG59KVxuZXhwb3J0IGNsYXNzIEFnbUNpcmNsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBjaXJjbGUgKHJlcXVpcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjbGlja2FibGUgcG9zaXRpb24gb2YgdGhlIGNpcmNsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgQ2lyY2xlIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgY2lyY2xlIG92ZXIgdGhlIG1hcC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnY2lyY2xlRHJhZ2dhYmxlJykgZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIGNpcmNsZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXRcbiAgICogdGhlIGNlbnRlciBhbmQgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBjaXJjbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCkgZWRpdGFibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWxsIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSByYWRpdXMgaW4gbWV0ZXJzIG9uIHRoZSBFYXJ0aCdzIHN1cmZhY2UuXG4gICAqL1xuICBASW5wdXQoKSByYWRpdXMgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgcG9zaXRpb24uIERlZmF1bHRzIHRvIENFTlRFUi5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VQb3NpdGlvbjoga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uID0gJ0NFTlRFUic7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0ID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGNpcmNsZSBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cbiAgICovXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIGNlbnRlciBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNlbnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBjaXJjbGVDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBjaXJjbGVEYmxDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgY2lyY2xlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBkcmFnOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZURvd246IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIGNpcmNsZSBtb3VzZW91dC5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU91dDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gY2lyY2xlIG1vdXNlb3Zlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VVcDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID1cbiAgICBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgcmFkaXVzIGlzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmFkaXVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgKi9cbiAgQE91dHB1dCgpIHJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2NpcmNsZUFkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnM6IHN0cmluZ1tdID0gW1xuICAgICdmaWxsQ29sb3InLFxuICAgICdmaWxsT3BhY2l0eScsXG4gICAgJ3N0cm9rZUNvbG9yJyxcbiAgICAnc3Ryb2tlT3BhY2l0eScsXG4gICAgJ3N0cm9rZVBvc2l0aW9uJyxcbiAgICAnc3Ryb2tlV2VpZ2h0JyxcbiAgICAndmlzaWJsZScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ2NsaWNrYWJsZScsXG4gIF07XG5cbiAgcHJpdmF0ZSBfZXZlbnRTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IENpcmNsZU1hbmFnZXIpIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB2YXIgcmlwID0gdGhpcy5fbWFuYWdlci5hZGRDaXJjbGUodGhpcyk7XG4gICAgcmlwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2lyY2xlQWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKCF0aGlzLl9jaXJjbGVBZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRDZW50ZXIodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydlZGl0YWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldEVkaXRhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZHJhZ2dhYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0RHJhZ2dhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sndmlzaWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldFZpc2libGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydyYWRpdXMnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRSYWRpdXModGhpcyk7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgdGhpcy5fdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDaXJjbGVPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XG4gIH0pIHtcbiAgICBjb25zdCBvcHRpb25zOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBjb25zdCBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKFxuICAgICAgKGspID0+IEFnbUNpcmNsZS5fbWFwT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMVxuICAgICk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9uS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBldmVudHM6IE1hcDxzdHJpbmcsIEV2ZW50RW1pdHRlcjxhbnk+PiA9IG5ldyBNYXA8XG4gICAgICBzdHJpbmcsXG4gICAgICBFdmVudEVtaXR0ZXI8YW55PlxuICAgID4oKTtcbiAgICBldmVudHMuc2V0KCdjZW50ZXJfY2hhbmdlZCcsIHRoaXMuY2VudGVyQ2hhbmdlKTtcbiAgICBldmVudHMuc2V0KCdjbGljaycsIHRoaXMuY2lyY2xlQ2xpY2spO1xuICAgIGV2ZW50cy5zZXQoJ2RibGNsaWNrJywgdGhpcy5jaXJjbGVEYmxDbGljayk7XG4gICAgZXZlbnRzLnNldCgnZHJhZycsIHRoaXMuZHJhZyk7XG4gICAgZXZlbnRzLnNldCgnZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZCk7XG4gICAgZXZlbnRzLnNldCgnZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgZXZlbnRzLnNldCgnbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0KTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW92ZXInLCB0aGlzLm1vdXNlT3Zlcik7XG4gICAgZXZlbnRzLnNldCgnbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgZXZlbnRzLnNldCgncmFkaXVzX2NoYW5nZWQnLCB0aGlzLnJhZGl1c0NoYW5nZSk7XG4gICAgZXZlbnRzLnNldCgncmlnaHRjbGljaycsIHRoaXMucmlnaHRDbGljayk7XG5cbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRFbWl0dGVyLCBldmVudE5hbWUpID0+IHtcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICB0aGlzLl9tYW5hZ2VyXG4gICAgICAgICAgLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PihldmVudE5hbWUsIHRoaXMpXG4gICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3JhZGl1c19jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAuZ2V0UmFkaXVzKHRoaXMpXG4gICAgICAgICAgICAgICAgICAudGhlbigocmFkaXVzKSA9PiBldmVudEVtaXR0ZXIuZW1pdChyYWRpdXMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnY2VudGVyX2NoYW5nZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZXJcbiAgICAgICAgICAgICAgICAgIC5nZXRDZW50ZXIodGhpcylcbiAgICAgICAgICAgICAgICAgIC50aGVuKChjZW50ZXIpID0+XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGNlbnRlci5sYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgICBsbmc6IGNlbnRlci5sbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fbWFuYWdlci5yZW1vdmVDaXJjbGUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgTGF0TG5nQm91bmRzIG9mIHRoaXMgQ2lyY2xlLlxuICAgKi9cbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZXIuZ2V0Qm91bmRzKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2VudGVyKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTGF0TG5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZXIuZ2V0Q2VudGVyKHRoaXMpO1xuICB9XG59XG4iXX0=