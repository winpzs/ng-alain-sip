import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonModule } from './delon/delon.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [
        CommonModule,
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