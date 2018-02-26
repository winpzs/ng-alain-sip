import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipSharedModule } from './sip-shared/sip-shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule
    ],
    declarations: [],
    providers: [],
    exports:[
        SipSharedModule
    ],
    entryComponents:[]
})
export class SipModule { }
