import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TestModule } from './test.module';
import { SipSharedModule } from '../../sip-shared/sip-shared.module';
import { UiDemoSharedModule } from '../ui-demo-shared/ui-demo-shared.module';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
    {
        path: 'test-list',
        component: TestListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        UiDemoSharedModule,
        TestModule,
        RouterModule.forChild(routes)
    ]
})
export class TestRoutingModule { }
