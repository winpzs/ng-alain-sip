import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { OnlineModule } from './online.module';
import { SipSharedModule } from '../sip-shared/sip-shared.module';

const routes: Routes = [
    {
        path: 'iaas',
        loadChildren: './modules/iaas/iaas-routing.module#IaasRoutingModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        OnlineModule,
        RouterModule.forChild(routes)
    ]
})
export class OnlineRoutingModule { }
