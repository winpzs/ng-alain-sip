import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { DelonModule } from './delon/delon.module';

export * from './core/extends/lib';
export * from './core/extends/rxjs';
export * from './core/extends/decorators';
export * from './core/extends/sip-validators';
export * from './core/extends/sip-helper';

export * from './core/services/sip-config.service';
export * from './core/services/sip-cache.service';
export * from './core/services/sip-rest.service';
export * from './core/services/sip-event.service';

export * from './shared/components/menu/contextmenu.component';
export * from './shared/components/menu/menu-group.component';
export * from './shared/components/menu/menu-item-divider.component';
export * from './shared/components/menu/menu-item.component';
export * from './shared/components/menu/menu-sub.component';
export * from './shared/components/menu/menu.component';
export * from './shared/components/menu/menu-item';
export * from './shared/components/minitable/minicolumn.component';
export * from './shared/components/minitable/minitable.component';
export * from './shared/components/modal/modal-body.component';
export * from './shared/components/modal/modal-footer.component';
export * from './shared/components/modal/modal-header.component';
export * from './shared/components/modal/modal.component';
export * from './shared/components/page/page-body.component';
export * from './shared/components/page/page-header.component';
export * from './shared/components/page/page-toolbar.component';
export * from './shared/components/page/page.component';
export * from './shared/components/searchConent.component';

export * from './core/sip-core.module';
export * from './shared/sip-shared.module';

@NgModule({
    imports: [
        DelonModule
    ],
    exports:[
        DelonModule
    ]
})
export class SipAlainModule {
    constructor(@Optional() @SkipSelf() parentModule: SipAlainModule) {
        if (parentModule) {
            throw new Error(`SipAlainModule has already been loaded. Import Core modules in the AppModule only.`);
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SipAlainModule,
            providers: []
        };
    }
}