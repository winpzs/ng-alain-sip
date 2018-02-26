import { Component, ViewChild, forwardRef, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService, SettingsService } from '@delon/theme';
import { ReuseTabComponent, ReuseTabService, ReuseTabMatchMode } from '@delon/abc';
import { SipLayout } from './../sip/sip-layout';
import { SipAppContainerService } from '../sip/core/services/sip-app-container.service';

@Component({
    selector: 'layout-reuseTab-layout',
    templateUrl: './reuseTab-layout.component.html',
    providers: [{ provide: SipLayout, useExisting: forwardRef(() => ReuseTabLayoutComponent) }]
})
export class ReuseTabLayoutComponent implements SipLayout {
    isFetching = false;

    @ViewChild('tab') tab: ReuseTabComponent;

    constructor(
        router: Router,
        scroll: ScrollService,
        private _message: NzMessageService,
        public menuSrv: MenuService,
        public settings: SettingsService,
        reuseTabSrv: ReuseTabService,
        vcRef: ViewContainerRef,
        vc: SipAppContainerService) {

        reuseTabSrv.mode = ReuseTabMatchMode.URL;

        vc.init(vcRef);

        // scroll to top in change page
        router.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            setTimeout(() => {

                scroll.scrollToTop();
                this.isFetching = false;
            }, 100);
        });
    }
}
