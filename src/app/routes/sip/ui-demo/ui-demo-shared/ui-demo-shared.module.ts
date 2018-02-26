import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { SipSharedModule } from '../../sip-shared/sip-shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipSharedModule
    ],
    declarations: [
        FormComponent
    ],
    providers: [],
    exports:[
        FormComponent
    ],
    entryComponents:[]
})
export class UiDemoSharedModule { }
