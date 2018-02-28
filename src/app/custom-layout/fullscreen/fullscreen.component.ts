import { Component, ViewContainerRef, forwardRef } from '@angular/core';
import { ReuseTabComponent } from '@delon/abc';
import { SipLayout } from 'app/sip-alain';

@Component({
    selector: 'layout-fullscreen',
    templateUrl: './fullscreen.component.html',
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => LayoutFullScreenComponent) }]
})
export class LayoutFullScreenComponent implements SipLayout {

    tab: ReuseTabComponent;

}
