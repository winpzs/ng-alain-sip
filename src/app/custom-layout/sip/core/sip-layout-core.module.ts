import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SipAppContainerService } from './services/sip-app-container.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [],
    providers: [
        SipAppContainerService
    ],
    exports:[],
    entryComponents:[]
})
export class SipLayoutCoreModule { }
