import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

const COMPONENTS = [
    LayoutFullScreenComponent
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
import { DefaultModule } from './default/default.module';
import { ReuseTabLayoutModule } from './reuse-tab/reuseTab-layout.module';


const PASSPORT = [
    LayoutPassportComponent
];

@NgModule({
    imports: [
        SharedModule,
        DefaultModule,
        ReuseTabLayoutModule
    ],
    providers: [],
    declarations: [
        LayoutFullScreenComponent,
        ...PASSPORT,
    ],
    exports: [
        ...PASSPORT,
        DefaultModule,
        ReuseTabLayoutModule
    ]
})
export class CustomLayoutModule { }
