import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from './admin.module';
import { SipSharedModule } from '@sip/sip-shared/sip-shared.module';

const routes: Routes = [];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        AdminModule,
        RouterModule.forChild(routes)
    ]
})
export class AdminRoutingModule { }
