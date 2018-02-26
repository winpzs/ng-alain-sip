import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipDirectivesModule } from './directives/sip-directives.module';
import { SipComponentsModule } from './components/sip-components.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipDirectivesModule,
        SipComponentsModule
    ],
    declarations: [],
    providers: [],
    exports:[SharedModule,
        SipDirectivesModule,
        SipComponentsModule
    ],
    entryComponents:[]
})
export class SipSharedModule { }
