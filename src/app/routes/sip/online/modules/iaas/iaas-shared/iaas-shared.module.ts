import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IaasService } from './services/iaas.service';

export * from './services/iaas.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [],
    providers: [
        IaasService
    ],
    exports:[],
    entryComponents:[]
})
export class IaasSharedModule { }
