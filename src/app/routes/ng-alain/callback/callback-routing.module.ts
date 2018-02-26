import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CallbackComponent } from './callback.component';

const routes: Routes = [
    {
        path: 'callback',
        component: CallbackComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations:[CallbackComponent]
})
export class CallbackRoutingModule { }
