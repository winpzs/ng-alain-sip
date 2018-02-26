import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

export * from './lib';
export * from './rxjs';
export * from './decorators';
export * from './sip-validators';
export * from './sip-helper';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [],
    providers: [],
    exports:[],
    entryComponents:[]
})
export class ExtendsModule { }
