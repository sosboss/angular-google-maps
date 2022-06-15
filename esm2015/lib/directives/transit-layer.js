import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/managers/layer-manager";
let layerId = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
export class AgmTransitLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmTransitLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) { return new (t || AgmTransitLayer)(i0.ɵɵdirectiveInject(i1.LayerManager)); };
AgmTransitLayer.ɵdir = i0.ɵɵdefineDirective({ type: AgmTransitLayer, selectors: [["agm-transit-layer"]], inputs: { visible: "visible" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmTransitLayer, [{
        type: Directive,
        args: [{
                selector: 'agm-transit-layer',
            }]
    }], function () { return [{ type: i1.LayerManager }]; }, { visible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdC1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFHcEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBRWhCOzs7S0FHSztBQUlMLE1BQU0sT0FBTyxlQUFlO0lBU3hCLFlBQXFCLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFSbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNNLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFdUIsQ0FBQztJQUVoRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsRUFBRSxLQUFhLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakMsZ0JBQWdCO0lBQ2hCLFFBQVEsS0FBYSxPQUFPLG1CQUFtQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZFLGdCQUFnQjtJQUNoQixXQUFXO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OEVBNUJRLGVBQWU7b0RBQWYsZUFBZTtrREFBZixlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2FBQ2hDOztrQkFRSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2xheWVyLW1hbmFnZXInO1xuXG5sZXQgbGF5ZXJJZCA9IDA7XG5cbi8qXG4gKiBUaGlzIGRpcmVjdGl2ZSBhZGRzIGEgdHJhbnNpdCBsYXllciB0byBhIGdvb2dsZSBtYXAgaW5zdGFuY2VcbiAqIDxhZ20tdHJhbnNpdC1sYXllciBbdmlzaWJsZV09XCJ0cnVlfGZhbHNlXCI+IDxhZ20tdHJhbnNpdC1sYXllcj5cbiAqICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2FnbS10cmFuc2l0LWxheWVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtVHJhbnNpdExheWVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gICAgcHJpdmF0ZSBfYWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcblxuICAgIC8qKlxuICAgICAqIEhpZGUvc2hvdyB0cmFuc2l0IGxheWVyXG4gICAgICovXG4gICAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfbWFuYWdlcjogTGF5ZXJNYW5hZ2VyICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VyLmFkZFRyYW5zaXRMYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5fYWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEFnbVRyYW5zaXRMYXllci0ke3RoaXMuX2lkLnRvU3RyaW5nKCl9YDsgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9tYW5hZ2VyLmRlbGV0ZUxheWVyKHRoaXMpO1xuICAgIH1cblxufVxuIl19