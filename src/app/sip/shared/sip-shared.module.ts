import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SipDirectivesModule } from './directives/sip-directives.module';
import { SipComponentsModule } from './components/sip-components.module';

@NgModule({
    imports: [
        CommonModule,
        SipDirectivesModule,
        SipComponentsModule
    ],
    declarations: [],
    providers: [],
    exports: [
        SipDirectivesModule,
        SipComponentsModule
    ],
    entryComponents: []
})
export class SipSharedModule { }
