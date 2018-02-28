import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { SipAlainCoreModule } from '../sip-alain';
import { SipConfigService } from './sip-config/sip-config.service';

@NgModule({
    providers: [
        SipAlainCoreModule,
        SipConfigService
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
