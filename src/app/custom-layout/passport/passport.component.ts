import { Component, ViewContainerRef, forwardRef } from '@angular/core';
import { ReuseTabComponent } from '@delon/abc';
import { SipLayout } from '../sip/sip-layout';
import { SipAppContainerService } from '../sip/core/services/sip-app-container.service';

@Component({
    selector: 'layout-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.less'],
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => LayoutPassportComponent) }]
})
export class LayoutPassportComponent implements SipLayout {

    tab: ReuseTabComponent;

    constructor(
        vcRef: ViewContainerRef,
        vc: SipAppContainerService) {
        vc.init(vcRef);
    }

    links = [
        {
            title: '帮助',
            href: ''
        },
        {
            title: '隐私',
            href: ''
        },
        {
            title: '条款',
            href: ''
        }
    ];
}
