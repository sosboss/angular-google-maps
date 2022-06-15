import { OnDestroy, OnInit } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as i0 from "@angular/core";
export declare class AgmTransitLayer implements OnInit, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    /**
     * Hide/show transit layer
     */
    visible: boolean;
    constructor(_manager: LayerManager);
    ngOnInit(): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<AgmTransitLayer, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AgmTransitLayer, "agm-transit-layer", never, { "visible": "visible"; }, {}, never>;
}
