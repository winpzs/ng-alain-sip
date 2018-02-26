import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { IaasModule } from './iaas.module';
import { SipSharedModule } from '@sip/sip-shared/sip-shared.module';
import { InstanceCreateComponent } from './instance/instance-create/instance-create.component';
import { InstanceListComponent } from './instance/instance-list/instance-list.component';

const routes: Routes = [
    {
        path: 'instance-create',
        component: InstanceCreateComponent
    },
    {
        path: 'instance-list',
        component: InstanceListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        IaasModule,
        RouterModule.forChild(routes)
    ]
})
export class IaasRoutingModule { }
