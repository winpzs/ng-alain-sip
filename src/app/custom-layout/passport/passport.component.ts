import { Component, ViewContainerRef, forwardRef } from '@angular/core';
import { ReuseTabComponent } from '@delon/abc';
import { SipLayout } from 'app/sip-alain';

@Component({
    selector: 'layout-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.less'],
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => LayoutPassportComponent) }]
})
export class LayoutPassportComponent implements SipLayout {

    tab: ReuseTabComponent;

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
