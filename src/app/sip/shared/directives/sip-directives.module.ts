import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDirective } from './show.directive';
import { SharedModule } from '@shared/shared.module';
import { RouterLinkDirective } from './router-link.directive';
import { AccessDirective } from './access.directive';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ShowDirective,
        RouterLinkDirective,
        AccessDirective
    ],
    providers: [],
    exports:[
        ShowDirective,
        RouterLinkDirective,
        AccessDirective
    ],
    entryComponents:[]
})
export class SipDirectivesModule { }
