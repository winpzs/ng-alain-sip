import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SipConfigService } from './sip-config.service';
import { SipCacheService } from './sip-cache.service';
import { SipRestService } from './sip-rest.service';
import { SipEventService } from './sip-event.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        SipConfigService,
        SipCacheService,
        SipRestService,
        SipEventService
    ],
    exports:[],
    entryComponents:[]
})
export class ServicesModule { }
