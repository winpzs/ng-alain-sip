import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipSharedModule } from '@sip/sip-shared/sip-shared.module';
import { IaasSharedModule } from './iaas-shared/iaas-shared.module';
import { InstanceCreateComponent } from './instance/instance-create/instance-create.component';
import { InstanceListComponent } from './instance/instance-list/instance-list.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule,
        IaasSharedModule
    ],
    declarations: [
        InstanceCreateComponent,
        InstanceListComponent
    ],
    providers: [],
    exports:[
        IaasSharedModule,
        InstanceCreateComponent,
        InstanceListComponent
    ],
    entryComponents:[]
})
export class IaasModule { }
