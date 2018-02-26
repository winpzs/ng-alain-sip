import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SipDirectivesModule } from '../directives/sip-directives.module';

import { ContextmenuComponent } from './menu/contextmenu.component';
import { MenuGroupComponent } from './menu/menu-group.component';
import { MenuItemDividerComponent } from './menu/menu-item-divider.component';
import { MenuItemComponent } from './menu/menu-item.component';
import { MenuSubComponent } from './menu/menu-sub.component';
import { MenuComponent } from './menu/menu.component';
import { MinicolumnComponent } from './minitable/minicolumn.component';
import { MinitableComponent } from './minitable/minitable.component';
import { ModalBodyComponent } from './modal/modal-body.component';
import { ModalFooterComponent } from './modal/modal-footer.component';
import { ModalHeaderComponent } from './modal/modal-header.component';
import { ModalComponent } from './modal/modal.component';
import { PageBodyComponent } from './page/page-body.component';
import { PageHeaderComponent } from './page/page-header.component';
import { PageToolbarComponent } from './page/page-toolbar.component';
import { PageComponent } from './page/page.component';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './card/card.component';
import { SearchConentComponent } from './searchConent.component';

export * from './menu/contextmenu.component';
export * from './menu/menu-group.component';
export * from './menu/menu-item-divider.component';
export * from './menu/menu-item.component';
export * from './menu/menu-sub.component';
export * from './menu/menu.component';
export * from './menu/menu-item';
export * from './minitable/minicolumn.component';
export * from './minitable/minitable.component';
export * from './modal/modal-body.component';
export * from './modal/modal-footer.component';
export * from './modal/modal-header.component';
export * from './modal/modal.component';
export * from './page/page-body.component';
export * from './page/page-header.component';
export * from './page/page-toolbar.component';
export * from './page/page.component';
export * from './searchConent.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipDirectivesModule
    ],
    declarations: [
        ContextmenuComponent,
        MenuGroupComponent,
        MenuItemDividerComponent,
        MenuItemComponent,
        MenuSubComponent,
        MenuComponent,
        MinicolumnComponent,
        MinitableComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalComponent,
        PageBodyComponent,
        PageHeaderComponent,
        PageToolbarComponent,
        PageComponent,
        CardComponent,
        SearchConentComponent
    ],
    providers: [],
    exports:[
        ContextmenuComponent,
        MenuGroupComponent,
        MenuItemDividerComponent,
        MenuItemComponent,
        MenuSubComponent,
        MenuComponent,
        MinicolumnComponent,
        MinitableComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalComponent,
        PageBodyComponent,
        PageHeaderComponent,
        PageToolbarComponent,
        PageComponent,
        CardComponent,
        SearchConentComponent
    ],
    entryComponents:[ModalComponent]
})
export class SipComponentsModule { }