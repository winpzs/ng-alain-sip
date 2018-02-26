import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipSharedModule } from '../../../sip-shared/sip-shared.module';
import { UiDemoSharedModule } from '../../ui-demo-shared/ui-demo-shared.module';
import { TestService } from './test.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        UiDemoSharedModule
    ],
    declarations: [],
    providers: [
        TestService
    ],
    exports:[],
    entryComponents:[]
})
export class TestSharedModule { }
