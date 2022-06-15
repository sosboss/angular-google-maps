import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../services/managers/kml-layer-manager";
let layerId = 0;
export class AgmKmlLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new EventEmitter();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new EventEmitter();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new EventEmitter();
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    }
    _updatePolygonOptions(changes) {
        const options = Object.keys(changes)
            .filter(k => AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
            { name: 'defaultviewport_changed', handler: () => this.defaultViewportChange.emit() },
            { name: 'status_changed', handler: () => this.statusChange.emit() },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmKmlLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) { return new (t || AgmKmlLayer)(i0.ɵɵdirectiveInject(i1.KmlLayerManager)); };
AgmKmlLayer.ɵdir = i0.ɵɵdefineDirective({ type: AgmKmlLayer, selectors: [["agm-kml-layer"]], inputs: { clickable: "clickable", preserveViewport: "preserveViewport", screenOverlays: "screenOverlays", suppressInfoWindows: "suppressInfoWindows", url: "url", zIndex: "zIndex" }, outputs: { layerClick: "layerClick", defaultViewportChange: "defaultViewportChange", statusChange: "statusChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmKmlLayer, [{
        type: Directive,
        args: [{
                selector: 'agm-kml-layer',
            }]
    }], function () { return [{ type: i1.KmlLayerManager }]; }, { clickable: [{
            type: Input
        }], preserveViewport: [{
            type: Input
        }], screenOverlays: [{
            type: Input
        }], suppressInfoWindows: [{
            type: Input
        }], url: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], layerClick: [{
            type: Output
        }], defaultViewportChange: [{
            type: Output
        }], statusChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMva21sLWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBS3BILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUtoQixNQUFNLE9BQU8sV0FBVztJQXlEdEIsWUFBb0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUF4RHJDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBSTVDOztXQUVHO1FBQ00sY0FBUyxHQUFHLElBQUksQ0FBQztRQUUxQjs7Ozs7V0FLRztRQUNNLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVsQzs7V0FFRztRQUNNLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRS9COztXQUVHO1FBQ00sd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRXJDOztXQUVHO1FBQ00sUUFBRyxHQUFXLElBQUksQ0FBQztRQUU1Qjs7V0FFRztRQUNNLFdBQU0sR0FBa0IsSUFBSSxDQUFDO1FBRXRDOztXQUVHO1FBQ08sZUFBVSxHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUU5Rzs7V0FFRztRQUNPLDBCQUFxQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRS9FOzs7O1dBSUc7UUFDTyxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBRXRCLENBQUM7SUFFakQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFB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USxFQUFFLGVBQWU7YUFDMUI7O2tCQVdFLEtBQUs7O2tCQVFMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLE1BQU07O2tCQUtOLE1BQU07O2tCQU9OLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEttbExheWVyTWFuYWdlciB9IGZyb20gJy4vLi4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInO1xuXG5sZXQgbGF5ZXJJZCA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1rbWwtbGF5ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21LbWxMYXllciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9hZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDogc3RyaW5nID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2ttbExheWVyT3B0aW9uczogc3RyaW5nW10gPVxuICAgICAgWydjbGlja2FibGUnLCAncHJlc2VydmVWaWV3cG9ydCcsICdzY3JlZW5PdmVybGF5cycsICdzdXBwcmVzc0luZm9XaW5kb3dzJywgJ3VybCcsICd6SW5kZXgnXTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGxheWVyIHJlY2VpdmVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIGlucHV0IG1hcCBpcyBjZW50ZXJlZCBhbmQgem9vbWVkIHRvIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgKiBsYXllci5cbiAgICogSWYgdGhpcyBvcHRpb24gaXMgc2V0IHRvIHRydWUsIHRoZSB2aWV3cG9ydCBpcyBsZWZ0IHVuY2hhbmdlZCwgdW5sZXNzIHRoZSBtYXAncyBjZW50ZXIgYW5kIHpvb21cbiAgICogd2VyZSBuZXZlciBzZXQuXG4gICAqL1xuICBASW5wdXQoKSBwcmVzZXJ2ZVZpZXdwb3J0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBzY3JlZW4gb3ZlcmxheXMuIERlZmF1bHQgdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHNjcmVlbk92ZXJsYXlzID0gdHJ1ZTtcblxuICAvKipcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBpbmZvIHdpbmRvd3Mgd2hlbiBsYXllciBmZWF0dXJlcyBhcmUgY2xpY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpIHN1cHByZXNzSW5mb1dpbmRvd3MgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgS01MIGRvY3VtZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBASW5wdXQoKSB1cmw6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSB6LWluZGV4IG9mIHRoZSBsYXllci5cbiAgICovXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiBhIGZlYXR1cmUgaW4gdGhlIGxheWVyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgbGF5ZXJDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkttbE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5LbWxNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIEtNTCBsYXllcnMgZGVmYXVsdCB2aWV3cG9ydCBoYXMgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBkZWZhdWx0Vmlld3BvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBLTUwgbGF5ZXIgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAqIEF0IHRoaXMgcG9pbnQgaXQgaXMgc2FmZSB0byByZWFkIHRoZSBzdGF0dXMgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBsYXllciBsb2FkZWRcbiAgICogc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQE91dHB1dCgpIHN0YXR1c0NoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IEttbExheWVyTWFuYWdlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFuYWdlci5hZGRLbWxMYXllcih0aGlzKTtcbiAgICB0aGlzLl9hZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBvbHlnb25PcHRpb25zKGNoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9seWdvbk9wdGlvbnMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IEFnbUttbExheWVyLl9rbWxMYXllck9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChvYmo6IGFueSwgazogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gW1xuICAgICAge25hbWU6ICdjbGljaycsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuS21sTW91c2VFdmVudCkgPT4gdGhpcy5sYXllckNsaWNrLmVtaXQoZXYpfSxcbiAgICAgIHtuYW1lOiAnZGVmYXVsdHZpZXdwb3J0X2NoYW5nZWQnLCBoYW5kbGVyOiAoKSA9PiB0aGlzLmRlZmF1bHRWaWV3cG9ydENoYW5nZS5lbWl0KCl9LFxuICAgICAge25hbWU6ICdzdGF0dXNfY2hhbmdlZCcsIGhhbmRsZXI6ICgpID0+IHRoaXMuc3RhdHVzQ2hhbmdlLmVtaXQoKX0sXG4gICAgXTtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBvcyA9IHRoaXMuX21hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCB0aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEFnbUttbExheWVyLSR7dGhpcy5faWQudG9TdHJpbmcoKX1gOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9tYW5hZ2VyLmRlbGV0ZUttbExheWVyKHRoaXMpO1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==