import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ReuseTabLayoutComponent } from './reuseTab-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderSearchComponent } from './header/components/search.component';
import { HeaderThemeComponent } from './header/components/theme.component';
import { HeaderNotifyComponent } from './header/components/notify.component';
import { HeaderIconComponent } from './header/components/icon.component';
import { HeaderFullScreenComponent } from './header/components/fullscreen.component';
import { HeaderLangsComponent } from './header/components/langs.component';
import { HeaderStorageComponent } from './header/components/storage.component';
import { HeaderUserComponent } from './header/components/user.component';
import { HeaderCartComponent } from './header/components/cart.component';
import { HeaderServerComponent } from './header/components/server.component';

const COMPONENTS = [
    ReuseTabLayoutComponent,
    HeaderComponent,
    SidebarComponent
];

const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderThemeComponent,
    HeaderLangsComponent,
    HeaderStorageComponent,
	HeaderUserComponent,
	HeaderCartComponent,
	HeaderServerComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ...COMPONENTS,
        ...HEADERCOMPONENTS
    ],
    providers: [],
    exports:[
        ...COMPONENTS
    ],
    entryComponents:[]
})
export class ReuseTabLayoutModule { }
