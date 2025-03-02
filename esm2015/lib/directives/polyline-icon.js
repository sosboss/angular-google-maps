import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 */
export class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
}
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) { return new (t || AgmPolylineIcon)(); };
AgmPolylineIcon.ɵdir = i0.ɵɵdefineDirective({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AgmPolylineIcon, [{
        type: Directive,
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], null, { fixedRotation: [{
            type: Input
        }], offset: [{
            type: Input
        }], repeat: [{
            type: Input
        }], anchorX: [{
            type: Input
        }], anchorY: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], path: [{
            type: Input
        }], rotation: [{
            type: Input
        }], scale: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRXpEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUgsTUFBTSxPQUFPLGVBQWU7SUFzRjFCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7OzhFQTFGVSxlQUFlO29EQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUM7O2tCQVFwRCxLQUFLOztrQkFPTCxLQUFLOztrQkFPTCxLQUFLOztrQkFRTCxLQUFLOztrQkFRTCxLQUFLOztrQkFNTCxLQUFLOztrQkFLTCxLQUFLOztrQkFNTCxLQUFLOztrQkFPTCxLQUFLOztrQkFPTCxLQUFLOztrQkFNTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQWdtUG9seWxpbmVJY29uIGVuYWJsZXMgdG8gYWRkIHBvbHlsaW5lIHNlcXVlbmNlcyB0byBhZGQgYXJyb3dzLCBjaXJjbGUsXG4gKiBvciBjdXN0b20gaWNvbnMgZWl0aGVyIGFsb25nIHRoZSBlbnRpcmUgbGluZSwgb3IgaW4gYSBzcGVjaWZpYyBwYXJ0IG9mIGl0LlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3NoYXBlcyNwb2x5bGluZV9jdXN0b21pemVcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgaHRtbFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLXBvbHlsaW5lPlxuICogICAgICAgICAgPGFnbS1pY29uLXNlcXVlbmNlIFtmaXhlZFJvdGF0aW9uXT1cInRydWVcIiBbcGF0aF09XCInRk9SV0FSRF9PUEVOX0FSUk9XJ1wiPlxuICogICAgICAgICAgPC9hZ20taWNvbi1zZXF1ZW5jZT5cbiAqICAgICAgPC9hZ20tcG9seWxpbmU+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdhZ20tcG9seWxpbmUgYWdtLWljb24tc2VxdWVuY2UnfSlcbmV4cG9ydCBjbGFzcyBBZ21Qb2x5bGluZUljb24gaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgZWFjaCBpY29uIGluIHRoZSBzZXF1ZW5jZSBoYXMgdGhlIHNhbWUgZml4ZWQgcm90YXRpb24gcmVnYXJkbGVzcyBvZiB0aGVcbiAgICogYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy4gRGVmYXVsdHMgdG8gYGZhbHNlYCwgaW4gd2hpY2ggY2FzZSBlYWNoIGljb25cbiAgICogaW4gdGhlIHNlcXVlbmNlIGlzIHJvdGF0ZWQgdG8gYWxpZ24gd2l0aCBpdHMgZWRnZS5cbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkUm90YXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBvZiB0aGUgbGluZSBhdCB3aGljaCBhbiBpY29uIGlzIHRvIGJlIHJlbmRlcmVkLiBUaGlzXG4gICAqIGRpc3RhbmNlIG1heSBiZSBleHByZXNzZWQgYXMgYSBwZXJjZW50YWdlIG9mIGxpbmUncyBsZW5ndGggKGUuZy4gJzUwJScpIG9yIGluIHBpeGVsc1xuICAgKiAoZS5nLiAnNTBweCcpLiBEZWZhdWx0cyB0byAnMTAwJScuXG4gICAqL1xuICBASW5wdXQoKSBvZmZzZXQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGJldHdlZW4gY29uc2VjdXRpdmUgaWNvbnMgb24gdGhlIGxpbmUuIFRoaXMgZGlzdGFuY2UgbWF5IGJlIGV4cHJlc3NlZCBhc1xuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGxpbmUncyBsZW5ndGggKGUuZy4gJzUwJScpIG9yIGluIHBpeGVscyAoZS5nLiAnNTBweCcpLiBUbyBkaXNhYmxlXG4gICAqIHJlcGVhdGluZyBvZiB0aGUgaWNvbiwgc3BlY2lmeSAnMCcuIERlZmF1bHRzIHRvICcwJy5cbiAgICovXG4gIEBJbnB1dCgpIHJlcGVhdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ltYm9sIHJlbGF0aXZlIHRvIHRoZSBwb2x5bGluZS4gVGhlIGNvb3JkaW5hdGVcbiAgICogb2YgdGhlIHN5bWJvbCdzIHBhdGggaXMgdHJhbnNsYXRlZCBfbGVmdF8gYnkgdGhlIGFuY2hvcidzIHggY29vcmRpbmF0ZS4gQnkgZGVmYXVsdCwgYVxuICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgKiBzeW1ib2wncyBwYXRoLlxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yWDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ltYm9sIHJlbGF0aXZlIHRvIHRoZSBwb2x5bGluZS4gVGhlIGNvb3JkaW5hdGVcbiAgICogb2YgdGhlIHN5bWJvbCdzIHBhdGggaXMgdHJhbnNsYXRlZCBfdXBfIGJ5IHRoZSBhbmNob3IncyB5IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcbiAgICogc3ltYm9sIGlzIGFuY2hvcmVkIGF0ICgwLCAwKS4gVGhlIHBvc2l0aW9uIGlzIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjb29yZGluYXRlIHN5c3RlbSBhcyB0aGVcbiAgICogc3ltYm9sJ3MgcGF0aC5cbiAgICovXG4gIEBJbnB1dCgpIGFuY2hvclk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICogY29sb3JzLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBjb3JyZXNwb25kaW5nIHBvbHlsaW5lLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBmaWxsIG9wYWNpdHkuIERlZmF1bHRzIHRvIDAuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3MgcGF0aCwgd2hpY2ggaXMgYSBidWlsdC1pbiBzeW1ib2wgcGF0aCwgb3IgYSBjdXN0b20gcGF0aCBleHByZXNzZWQgdXNpbmdcbiAgICogU1ZHIHBhdGggbm90YXRpb24uIFJlcXVpcmVkLlxuICAgKi9cbiAgQElucHV0KCkgcGF0aDoga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLlN5bWJvbFBhdGggfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgdGhlIHN5bWJvbCwgZXhwcmVzc2VkIGNsb2Nrd2lzZSBpbiBkZWdyZWVzLlxuICAgKiBEZWZhdWx0cyB0byAwLiBBIHN5bWJvbCB3aGVyZSBgZml4ZWRSb3RhdGlvbmAgaXMgYGZhbHNlYCBpcyByb3RhdGVkIHJlbGF0aXZlIHRvXG4gICAqIHRoZSBhbmdsZSBvZiB0aGUgZWRnZSBvbiB3aGljaCBpdCBsaWVzLlxuICAgKi9cbiAgQElucHV0KCkgcm90YXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBieSB3aGljaCB0aGUgc3ltYm9sIGlzIHNjYWxlZCBpbiBzaXplLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIHdlaWdodFxuICAgKiBvZiB0aGUgcG9seWxpbmU7IGFmdGVyIHNjYWxpbmcsIHRoZSBzeW1ib2wgbXVzdCBsaWUgaW5zaWRlIGEgc3F1YXJlIDIyIHBpeGVscyBpblxuICAgKiBzaXplIGNlbnRlcmVkIGF0IHRoZSBzeW1ib2wncyBhbmNob3IuXG4gICAqL1xuICBASW5wdXQoKSBzY2FsZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkXG4gICAqIGNvbG9ycy4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBjb2xvciBvZiB0aGUgcG9seWxpbmUuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIG9wYWNpdHkuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugb3BhY2l0eSBvZiB0aGUgcG9seWxpbmUuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2Ugd2VpZ2h0LiBEZWZhdWx0cyB0byB0aGUgc2NhbGUgb2YgdGhlIHN5bWJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodDogbnVtYmVyO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJY29uIFNlcXVlbmNlIHBhdGggaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==