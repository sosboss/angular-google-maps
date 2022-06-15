import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../services/managers/data-layer-manager";
let layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
export class AgmDataLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new EventEmitter();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmDataLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        // tslint:disable-next-line: no-string-literal
        const geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        const dataOptions = AgmDataLayer._dataOptionsAttributes.reduce((options, k) => options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k], {});
        this._manager.setDataOptions(this, dataOptions);
    }
}
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) { return new (t || AgmDataLayer)(i0.ɵɵdirectiveInject(i1.DataLayerManager)); };
AgmDataLayer.ɵdir = i0.ɵɵdefineDirective({ type: AgmDataLayer, selectors: [["agm-data-layer"]], inputs: { geoJson: "geoJson", style: "style" }, outputs: { layerClick: "layerClick" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmDataLayer, [{
        type: Directive,
        args: [{
                selector: 'agm-data-layer',
            }]
    }], function () { return [{ type: i1.DataLayerManager }]; }, { layerClick: [{
            type: Output
        }], geoJson: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFLcEgsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2TEc7QUFJSCxNQUFNLE9BQU8sWUFBWTtJQXNCdkIsWUFBb0IsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFuQnRDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRTVDOztXQUVHO1FBQ08sZUFBVSxHQUE4QyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUVsSDs7V0FFRztRQUNNLFlBQU8sR0FBMkIsSUFBSSxDQUFDO0lBT0UsQ0FBQztJQUVuRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsTUFBTSxTQUFTLEdBQUc7WUFDaEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQStCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQzFGLENBQUM7UUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLEVBQUUsS0FBYSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWpDLGdCQUFnQjtJQUNoQixRQUFRLEtBQWEsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRSxnQkFBZ0I7SUFDaEIsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUVELDhDQUE4QztRQUM5QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtRQUVELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQStCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQzFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBRSxJQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBdkVjLG1DQUFzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0VBRHZDLFlBQVk7aURBQVosWUFBWTtrREFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOztrQkFXRSxNQUFNOztrQkFLTixLQUFLOztrQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9kYXRhLWxheWVyLW1hbmFnZXInO1xuXG5sZXQgbGF5ZXJJZCA9IDA7XG5cbi8qKlxuICogQWdtRGF0YUxheWVyIGVuYWJsZXMgdGhlIHVzZXIgdG8gYWRkIGRhdGEgbGF5ZXJzIHRvIHRoZSBtYXAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHsgQWdtTWFwLCBBZ21EYXRhTGF5ZXIgfSBmcm9tXG4gKiAnYW5ndWxhci1nb29nbGUtbWFwcy9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIGRpcmVjdGl2ZXM6IFtBZ21NYXAsIEFnbURhdGFMYXllcl0sXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLmFnbS1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqIFx0ICA8YWdtLWRhdGEtbGF5ZXIgW2dlb0pzb25dPVwiZ2VvSnNvbk9iamVjdFwiIChsYXllckNsaWNrKT1cImNsaWNrZWQoJGV2ZW50KVwiIFtzdHlsZV09XCJzdHlsZUZ1bmNcIj5cbiAqIFx0ICA8L2FnbS1kYXRhLWxheWVyPlxuICogPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlNYXBDbXAge1xuICogICBsYXQ6IG51bWJlciA9IC0yNS4yNzQ0NDk7XG4gKiAgIGxuZzogbnVtYmVyID0gMTMzLjc3NTA2MDtcbiAqICAgem9vbTogbnVtYmVyID0gNTtcbiAqXG4gKiBjbGlja2VkKGNsaWNrRXZlbnQpIHtcbiAqICAgIGNvbnNvbGUubG9nKGNsaWNrRXZlbnQpO1xuICogIH1cbiAqXG4gKiAgc3R5bGVGdW5jKGZlYXR1cmUpIHtcbiAqICAgIHJldHVybiAoe1xuICogICAgICBjbGlja2FibGU6IGZhbHNlLFxuICogICAgICBmaWxsQ29sb3I6IGZlYXR1cmUuZ2V0UHJvcGVydHkoJ2NvbG9yJyksXG4gKiAgICAgIHN0cm9rZVdlaWdodDogMVxuICogICAgfSk7XG4gKiAgfVxuICpcbiAqICBnZW9Kc29uT2JqZWN0OiBPYmplY3QgPSB7XG4gKiAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICogICAgXCJmZWF0dXJlc1wiOiBbXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwiR1wiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcImJsdWVcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjdcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCI3MVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEyMy42MSwgLTIyLjE0XSwgWzEyMi4zOCwgLTIxLjczXSwgWzEyMS4wNiwgLTIxLjY5XSwgWzExOS42NiwgLTIyLjIyXSwgWzExOS4wMCwgLTIzLjQwXSxcbiAqICAgICAgICAgICAgICBbMTE4LjY1LCAtMjQuNzZdLCBbMTE4LjQzLCAtMjYuMDddLCBbMTE4Ljc4LCAtMjcuNTZdLCBbMTE5LjIyLCAtMjguNTddLCBbMTIwLjIzLCAtMjkuNDldLFxuICogICAgICAgICAgICAgIFsxMjEuNzcsIC0yOS44N10sIFsxMjMuNTcsIC0yOS42NF0sIFsxMjQuNDUsIC0yOS4wM10sIFsxMjQuNzEsIC0yNy45NV0sIFsxMjQuODAsIC0yNi43MF0sXG4gKiAgICAgICAgICAgICAgWzEyNC44MCwgLTI1LjYwXSwgWzEyMy42MSwgLTI1LjY0XSwgWzEyMi41NiwgLTI1LjY0XSwgWzEyMS43MiwgLTI1LjcyXSwgWzEyMS44MSwgLTI2LjYyXSxcbiAqICAgICAgICAgICAgICBbMTIxLjg2LCAtMjYuOThdLCBbMTIyLjYwLCAtMjYuOTBdLCBbMTIzLjU3LCAtMjcuMDVdLCBbMTIzLjU3LCAtMjcuNjhdLCBbMTIzLjM1LCAtMjguMThdLFxuICogICAgICAgICAgICAgIFsxMjIuNTEsIC0yOC4zOF0sIFsxMjEuNzcsIC0yOC4yNl0sIFsxMjEuMDIsIC0yNy45MV0sIFsxMjAuNDksIC0yNy4yMV0sIFsxMjAuMTQsIC0yNi41MF0sXG4gKiAgICAgICAgICAgICAgWzEyMC4xMCwgLTI1LjY0XSwgWzEyMC4yNywgLTI0LjUyXSwgWzEyMC42NywgLTIzLjY4XSwgWzEyMS43MiwgLTIzLjMyXSwgWzEyMi40MywgLTIzLjQ4XSxcbiAqICAgICAgICAgICAgICBbMTIzLjA0LCAtMjQuMDRdLCBbMTI0LjU0LCAtMjQuMjhdLCBbMTI0LjU4LCAtMjMuMjBdLCBbMTIzLjYxLCAtMjIuMTRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwib1wiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiMTVcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCIxMTFcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgICAgICBcInR5cGVcIjogXCJQb2x5Z29uXCIsXG4gKiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMjguODQsIC0yNS43Nl0sIFsxMjguMTgsIC0yNS42MF0sIFsxMjcuOTYsIC0yNS41Ml0sIFsxMjcuODgsIC0yNS41Ml0sIFsxMjcuNzAsIC0yNS42MF0sXG4gKiAgICAgICAgICAgICAgWzEyNy4yNiwgLTI1Ljc5XSwgWzEyNi42MCwgLTI2LjExXSwgWzEyNi4xNiwgLTI2Ljc4XSwgWzEyNi4xMiwgLTI3LjY4XSwgWzEyNi4yMSwgLTI4LjQyXSxcbiAqICAgICAgICAgICAgICBbMTI2LjY5LCAtMjkuNDldLCBbMTI3Ljc0LCAtMjkuODBdLCBbMTI4LjgwLCAtMjkuNzJdLCBbMTI5LjQxLCAtMjkuMDNdLCBbMTI5LjcyLCAtMjcuOTVdLFxuICogICAgICAgICAgICAgIFsxMjkuNjgsIC0yNy4yMV0sIFsxMjkuMzMsIC0yNi4yM10sIFsxMjguODQsIC0yNS43Nl1cbiAqICAgICAgICAgICAgXSxcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMjguNDUsIC0yNy40NF0sIFsxMjguMzIsIC0yNi45NF0sIFsxMjcuNzAsIC0yNi44Ml0sIFsxMjcuMzUsIC0yNy4wNV0sIFsxMjcuMTcsIC0yNy44MF0sXG4gKiAgICAgICAgICAgICAgWzEyNy41NywgLTI4LjIyXSwgWzEyOC4xMCwgLTI4LjQyXSwgWzEyOC40OSwgLTI3LjgwXSwgWzEyOC40NSwgLTI3LjQ0XVxuICogICAgICAgICAgICBdXG4gKiAgICAgICAgICBdXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICB7XG4gKiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICogICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gKiAgICAgICAgICBcImxldHRlclwiOiBcIm9cIixcbiAqICAgICAgICAgIFwiY29sb3JcIjogXCJ5ZWxsb3dcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjE1XCIsXG4gKiAgICAgICAgICBcImFzY2lpXCI6IFwiMTExXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICogICAgICAgICAgXCJ0eXBlXCI6IFwiUG9seWdvblwiLFxuICogICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTMxLjg3LCAtMjUuNzZdLCBbMTMxLjM1LCAtMjYuMDddLCBbMTMwLjk1LCAtMjYuNzhdLCBbMTMwLjgyLCAtMjcuNjRdLCBbMTMwLjg2LCAtMjguNTNdLFxuICogICAgICAgICAgICAgIFsxMzEuMjYsIC0yOS4yMl0sIFsxMzEuOTIsIC0yOS43Nl0sIFsxMzIuNDUsIC0yOS44N10sIFsxMzMuMDYsIC0yOS43Nl0sIFsxMzMuNzIsIC0yOS4zNF0sXG4gKiAgICAgICAgICAgICAgWzEzNC4wNywgLTI4LjgwXSwgWzEzNC4yMCwgLTI3LjkxXSwgWzEzNC4wNywgLTI3LjIxXSwgWzEzMy44MSwgLTI2LjMxXSwgWzEzMy4zNywgLTI1LjgzXSxcbiAqICAgICAgICAgICAgICBbMTMyLjcxLCAtMjUuNjRdLCBbMTMxLjg3LCAtMjUuNzZdXG4gKiAgICAgICAgICAgIF0sXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTMzLjE1LCAtMjcuMTddLCBbMTMyLjcxLCAtMjYuODZdLCBbMTMyLjA5LCAtMjYuOTBdLCBbMTMxLjc0LCAtMjcuNTZdLCBbMTMxLjc5LCAtMjguMjZdLFxuICogICAgICAgICAgICAgIFsxMzIuMzYsIC0yOC40NV0sIFsxMzIuOTMsIC0yOC4zNF0sIFsxMzMuMTUsIC0yNy43Nl0sIFsxMzMuMTUsIC0yNy4xN11cbiAqICAgICAgICAgICAgXVxuICogICAgICAgICAgXVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAge1xuICogICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICogICAgICAgICAgXCJsZXR0ZXJcIjogXCJnXCIsXG4gKiAgICAgICAgICBcImNvbG9yXCI6IFwiYmx1ZVwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiN1wiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjEwM1wiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEzOC4xMiwgLTI1LjA0XSwgWzEzNi44NCwgLTI1LjE2XSwgWzEzNS45NiwgLTI1LjM2XSwgWzEzNS4yNiwgLTI1Ljk5XSwgWzEzNSwgLTI2LjkwXSxcbiAqICAgICAgICAgICAgICBbMTM1LjA0LCAtMjcuOTFdLCBbMTM1LjI2LCAtMjguODhdLCBbMTM2LjA1LCAtMjkuNDVdLCBbMTM3LjAyLCAtMjkuNDldLCBbMTM3LjgxLCAtMjkuNDldLFxuICogICAgICAgICAgICAgIFsxMzcuOTQsIC0yOS45OV0sIFsxMzcuOTAsIC0zMS4yMF0sIFsxMzcuODUsIC0zMi4yNF0sIFsxMzYuODgsIC0zMi42OV0sIFsxMzYuNDUsIC0zMi4zNl0sXG4gKiAgICAgICAgICAgICAgWzEzNi4yNywgLTMxLjgwXSwgWzEzNC45NSwgLTMxLjg0XSwgWzEzNS4xNywgLTMyLjk5XSwgWzEzNS41MiwgLTMzLjQzXSwgWzEzNi4xNCwgLTMzLjc2XSxcbiAqICAgICAgICAgICAgICBbMTM3LjA2LCAtMzMuODNdLCBbMTM4LjEyLCAtMzMuNjVdLCBbMTM4Ljg2LCAtMzMuMjFdLCBbMTM5LjMwLCAtMzIuMjhdLCBbMTM5LjMwLCAtMzEuMjRdLFxuICogICAgICAgICAgICAgIFsxMzkuMzAsIC0zMC4xNF0sIFsxMzkuMjEsIC0yOC45Nl0sIFsxMzkuMTcsIC0yOC4yMl0sIFsxMzkuMDgsIC0yNy40MV0sIFsxMzkuMDgsIC0yNi40N10sXG4gKiAgICAgICAgICAgICAgWzEzOC45OSwgLTI1LjQwXSwgWzEzOC43MywgLTI1LjAwXSwgWzEzOC4xMiwgLTI1LjA0XVxuICogICAgICAgICAgICBdLFxuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEzNy41MCwgLTI2LjU0XSwgWzEzNi45NywgLTI2LjQ3XSwgWzEzNi40OSwgLTI2LjU4XSwgWzEzNi4zMSwgLTI3LjEzXSwgWzEzNi4zMSwgLTI3LjcyXSxcbiAqICAgICAgICAgICAgICBbMTM2LjU4LCAtMjcuOTldLCBbMTM3LjUwLCAtMjguMDNdLCBbMTM3LjY4LCAtMjcuNjhdLCBbMTM3LjU5LCAtMjYuNzhdLCBbMTM3LjUwLCAtMjYuNTRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwibFwiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gKiAgICAgICAgICBcInJhbmtcIjogXCIxMlwiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjEwOFwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzE0MC4xNCwgLTIxLjA0XSwgWzE0MC4zMSwgLTI5LjQyXSwgWzE0MS42NywgLTI5LjQ5XSwgWzE0MS41OSwgLTIwLjkyXSwgWzE0MC4xNCwgLTIxLjA0XVxuICogICAgICAgICAgICBdXG4gKiAgICAgICAgICBdXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICB7XG4gKiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICogICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gKiAgICAgICAgICBcImxldHRlclwiOiBcImVcIixcbiAqICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjVcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCIxMDFcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgICAgICBcInR5cGVcIjogXCJQb2x5Z29uXCIsXG4gKiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxNDQuMTQsIC0yNy40MV0sIFsxNDUuNjcsIC0yNy41Ml0sIFsxNDYuODYsIC0yNy4wOV0sIFsxNDYuODIsIC0yNS42NF0sIFsxNDYuMjUsIC0yNS4wNF0sXG4gKiAgICAgICAgICAgICAgWzE0NS40NSwgLTI0LjY4XSwgWzE0NC42NiwgLTI0LjYwXSwgWzE0NC4wOSwgLTI0Ljc2XSwgWzE0My40MywgLTI1LjA4XSwgWzE0Mi45OSwgLTI1LjQwXSxcbiAqICAgICAgICAgICAgICBbMTQyLjY0LCAtMjYuMDNdLCBbMTQyLjY0LCAtMjcuMDVdLCBbMTQyLjY0LCAtMjguMjZdLCBbMTQzLjMwLCAtMjkuMTFdLCBbMTQ0LjE4LCAtMjkuNTddLFxuICogICAgICAgICAgICAgIFsxNDUuNDEsIC0yOS42NF0sIFsxNDYuNDYsIC0yOS4xOV0sIFsxNDYuNjQsIC0yOC43Ml0sIFsxNDYuODIsIC0yOC4xNF0sIFsxNDQuODQsIC0yOC40Ml0sXG4gKiAgICAgICAgICAgICAgWzE0NC4zMSwgLTI4LjI2XSwgWzE0NC4xNCwgLTI3LjQxXVxuICogICAgICAgICAgICBdLFxuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzE0NC4xOCwgLTI2LjM5XSwgWzE0NC41MywgLTI2LjU4XSwgWzE0NS4xOSwgLTI2LjYyXSwgWzE0NS43MiwgLTI2LjM1XSwgWzE0NS44MSwgLTI1LjkxXSxcbiAqICAgICAgICAgICAgICBbMTQ1LjQxLCAtMjUuNjhdLCBbMTQ0Ljk3LCAtMjUuNjhdLCBbMTQ0LjQ5LCAtMjUuNjRdLCBbMTQ0LCAtMjUuOTldLCBbMTQ0LjE4LCAtMjYuMzldXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqICAgIF1cbiAqICB9O1xuICogfVxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1kYXRhLWxheWVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtRGF0YUxheWVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgc3RhdGljIF9kYXRhT3B0aW9uc0F0dHJpYnV0ZXMgPSBbJ3N0eWxlJ107XG5cbiAgcHJpdmF0ZSBfYWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IChsYXllcklkKyspLnRvU3RyaW5nKCk7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiBhIGZlYXR1cmUgaW4gdGhlIGxheWVyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgbGF5ZXJDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkRhdGEuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkRhdGEuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhlIGdlb0pzb24gdG8gYmUgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBnZW9Kc29uOiBvYmplY3QgfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGxheWVyJ3Mgc3R5bGUgZnVuY3Rpb24uXG4gICAqL1xuICBASW5wdXQoKSBzdHlsZTogKHBhcmFtOiBnb29nbGUubWFwcy5EYXRhLkZlYXR1cmUpID0+IGdvb2dsZS5tYXBzLkRhdGEuU3R5bGVPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IERhdGFMYXllck1hbmFnZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLl9hZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYW5hZ2VyLmFkZERhdGFMYXllcih0aGlzKTtcbiAgICB0aGlzLl9hZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IFtcbiAgICAgIHsgbmFtZTogJ2NsaWNrJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5EYXRhLk1vdXNlRXZlbnQpID0+IHRoaXMubGF5ZXJDbGljay5lbWl0KGV2KSB9LFxuICAgIF07XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgY29uc3Qgb3MgPSB0aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZShvYmoubmFtZSwgdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIGBBZ21EYXRhTGF5ZXItJHt0aGlzLl9pZC50b1N0cmluZygpfWA7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX21hbmFnZXIuZGVsZXRlRGF0YUxheWVyKHRoaXMpO1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIGNvbnN0IGdlb0pzb25DaGFuZ2UgPSBjaGFuZ2VzWydnZW9Kc29uJ107XG4gICAgaWYgKGdlb0pzb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX21hbmFnZXIudXBkYXRlR2VvSnNvbih0aGlzLCBnZW9Kc29uQ2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSBBZ21EYXRhTGF5ZXIuX2RhdGFPcHRpb25zQXR0cmlidXRlcy5yZWR1Y2U8Z29vZ2xlLm1hcHMuRGF0YS5EYXRhT3B0aW9ucz4oKG9wdGlvbnMsIGspID0+XG4gICAgICBvcHRpb25zW2tdID0gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrKSA/IGNoYW5nZXNba10uY3VycmVudFZhbHVlIDogKHRoaXMgYXMgYW55KVtrXSwge30pO1xuXG4gICAgdGhpcy5fbWFuYWdlci5zZXREYXRhT3B0aW9ucyh0aGlzLCBkYXRhT3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==