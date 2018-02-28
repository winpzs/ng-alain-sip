import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UiDemoSharedModule } from './ui-demo-shared/ui-demo-shared.module';
import { DetailComponent } from './table/detail/detail.component';
import { TestModalComponent } from './table/test-modal/test-modal.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { InstanceCreateComponent } from './instance-create/instance-create.component';
import { BaseformComponent } from './baseform/baseform.component';
import { ServerListComponent } from './server-list/server-list.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        UiDemoSharedModule
    ],
    declarations: [
        DetailComponent,
        TestModalComponent,
        TableComponent,
        ListComponent,
        InstanceCreateComponent,
        BaseformComponent,
        ServerListComponent
    ],
    providers: [],
    exports:[
        UiDemoSharedModule,
        DetailComponent,
        TestModalComponent,
        TableComponent,
        ListComponent,
        InstanceCreateComponent,
        BaseformComponent
    ],
    entryComponents:[
        TestModalComponent
    ]
})
export class UiDemoModule { }
