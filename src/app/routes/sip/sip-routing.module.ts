import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SipModule } from './sip.module';

const routes: Routes = [
    {
        path: 'ui-demo',
        loadChildren: './ui-demo/ui-demo-routing.module#UiDemoRoutingModule'
    }
];

const sipRoutes: Routes = [
    {
        path: '',
        children:routes
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipModule,
        RouterModule.forChild(sipRoutes)
    ]
})
export class SipRoutingModule { }
