import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ServicesModule } from './services/services.module';
import { ExtendsModule } from './extends/extends.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ExtendsModule,
        ServicesModule
    ],
    declarations: [],
    providers: [

    ],
    exports: [
        ServicesModule,
        ExtendsModule
    ],
    entryComponents: []
})
export class SipCoreModule { }
