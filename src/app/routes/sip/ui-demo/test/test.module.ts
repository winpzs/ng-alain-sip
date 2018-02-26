import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipSharedModule } from '../../sip-shared/sip-shared.module';
import { UiDemoSharedModule } from '../ui-demo-shared/ui-demo-shared.module';
import { TestListComponent } from './test-list/test-list.component';
import { TestSharedModule } from './test-shared/test-shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        UiDemoSharedModule,
        TestSharedModule
    ],
    declarations: [
        TestListComponent
    ],
    providers: [],
    exports:[
        TestListComponent,
        TestSharedModule
    ],
    entryComponents:[]
})
export class TestModule { }
