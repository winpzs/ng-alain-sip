import { Component, ViewContainerRef, forwardRef } from '@angular/core';
import { ReuseTabComponent } from '@delon/abc';
import { SipLayout } from '../sip/sip-layout';
import { SipAppContainerService } from '../sip/core/services/sip-app-container.service';

@Component({
    selector: 'layout-fullscreen',
    templateUrl: './fullscreen.component.html',
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => LayoutFullScreenComponent) }]
})
export class LayoutFullScreenComponent implements SipLayout {

    tab: ReuseTabComponent;

    constructor(
        vcRef: ViewContainerRef,
        vc: SipAppContainerService) {
        vc.init(vcRef);
    }
}
