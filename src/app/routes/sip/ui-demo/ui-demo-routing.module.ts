import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './table/detail/detail.component';
import { BaseformComponent } from './baseform/baseform.component';
import { InstanceCreateComponent } from './instance-create/instance-create.component';
import { TestModalComponent } from './table/test-modal/test-modal.component';
import { ServerListComponent } from './server-list/server-list.component';
import { UiDemoModule } from './ui-demo.module';

const routes: Routes = [
    {
		path: 'list', component: ListComponent
	},
    {
		path: 'table', component: TableComponent
	},
    { path: 'create', component: BaseformComponent },
    {
		path: 'detail', component: DetailComponent
	},
    { path: 'baseform', component: BaseformComponent },
    { path: 'instance-create', component: InstanceCreateComponent },
    { path: 'server-list', component: ServerListComponent }
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		UiDemoModule
	]
})
export class UiDemoRoutingModule { }
