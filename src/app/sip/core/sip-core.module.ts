import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ServicesModule } from './services/services.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ServicesModule
    ],
    declarations: [],
    providers: [

    ],
    exports: [
        ServicesModule
    ],
    entryComponents: []
})
export class SipCoreModule { }
