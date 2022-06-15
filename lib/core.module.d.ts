import { ModuleWithProviders } from '@angular/core';
import { AgmBicyclingLayer } from './directives/bicycling-layer';
import { AgmCircle } from './directives/circle';
import { AgmDataLayer } from './directives/data-layer';
import { AgmFitBounds } from './directives/fit-bounds';
import { AgmInfoWindow } from './directives/info-window';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmFullscreenControl, AgmMap } from './directives/map';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylineIcon } from './directives/polyline-icon';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmRectangle } from './directives/rectangle';
import { AgmTransitLayer } from './directives/transit-layer';
import { LazyMapsAPILoaderConfigLiteral } from './services/maps-api-loader/lazy-maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./directives/bicycling-layer";
import * as i2 from "./directives/circle";
import * as i3 from "./directives/data-layer";
import * as i4 from "./directives/fit-bounds";
import * as i5 from "./directives/map";
import * as i6 from "./directives/info-window";
import * as i7 from "./directives/kml-layer";
import * as i8 from "./directives/marker";
import * as i9 from "./directives/polygon";
import * as i10 from "./directives/polyline";
import * as i11 from "./directives/polyline-icon";
import * as i12 from "./directives/polyline-point";
import * as i13 from "./directives/rectangle";
import * as i14 from "./directives/transit-layer";
/**
 * @internal
 */
export declare function coreDirectives(): (typeof AgmCircle | typeof AgmDataLayer | typeof AgmMarker | typeof AgmInfoWindow | typeof AgmKmlLayer | typeof AgmBicyclingLayer | typeof AgmTransitLayer | typeof AgmPolygon | typeof AgmPolylineIcon | typeof AgmPolylinePoint | typeof AgmPolyline | typeof AgmRectangle | typeof AgmFitBounds | typeof AgmFullscreenControl | typeof AgmMap)[];
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
export declare class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig?: LazyMapsAPILoaderConfigLiteral): ModuleWithProviders<AgmCoreModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<AgmCoreModule, [typeof i1.AgmBicyclingLayer, typeof i2.AgmCircle, typeof i3.AgmDataLayer, typeof i4.AgmFitBounds, typeof i5.AgmFullscreenControl, typeof i6.AgmInfoWindow, typeof i7.AgmKmlLayer, typeof i5.AgmMap, typeof i5.AgmMapTypeControl, typeof i8.AgmMarker, typeof i5.AgmPanControl, typeof i9.AgmPolygon, typeof i10.AgmPolyline, typeof i11.AgmPolylineIcon, typeof i12.AgmPolylinePoint, typeof i13.AgmRectangle, typeof i5.AgmRotateControl, typeof i5.AgmScaleControl, typeof i5.AgmStreetViewControl, typeof i14.AgmTransitLayer, typeof i5.AgmZoomControl], never, [typeof i1.AgmBicyclingLayer, typeof i2.AgmCircle, typeof i3.AgmDataLayer, typeof i4.AgmFitBounds, typeof i5.AgmFullscreenControl, typeof i6.AgmInfoWindow, typeof i7.AgmKmlLayer, typeof i5.AgmMap, typeof i5.AgmMapTypeControl, typeof i8.AgmMarker, typeof i5.AgmPanControl, typeof i9.AgmPolygon, typeof i10.AgmPolyline, typeof i11.AgmPolylineIcon, typeof i12.AgmPolylinePoint, typeof i13.AgmRectangle, typeof i5.AgmRotateControl, typeof i5.AgmScaleControl, typeof i5.AgmStreetViewControl, typeof i14.AgmTransitLayer, typeof i5.AgmZoomControl]>;
    static ɵinj: i0.ɵɵInjectorDef<AgmCoreModule>;
}
