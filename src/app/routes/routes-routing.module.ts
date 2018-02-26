import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LayoutDefaultComponent } from '../custom-layout/default/default.component';
import { environment } from '@env/environment';
import { LayoutFullScreenComponent } from '../custom-layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../custom-layout/passport/passport.component';
import { SipCoreModule } from '@sip/sip-core/sip-core.module';
// import { ReuseTabLayoutComponent } from '../custom-layout/reuse-tab/reuseTab-layout.component';

const routes: Routes = [
    {
        path:'',
        component: LayoutDefaultComponent,
        children:[
            { path: '', redirectTo: 'sip/ui-demo/table', pathMatch:'full' },
            {
                path: 'sip',
                loadChildren: './sip/sip-routing.module#SipRoutingModule'
            }
        ]
    },
    // 全屏布局
    // 单页不包裹Layout
    {
        path: 'passport',
        component: LayoutPassportComponent,
        loadChildren: './ng-alain/passport/passport-routing.module#PassportRoutingModule'
    },
    {
        path: 'callback',
        loadChildren: './ng-alain/callback/callback-routing.module#CallbackRoutingModule'
    },
    {
        path: 'exception',
        loadChildren: './ng-alain/exception/exception-routing.module#ExceptionRoutingModule'
    },
    { path: 'callback/:type', redirectTo: 'callback/callback' },
    { path: '403', redirectTo: 'exception/403' },
    { path: '404', redirectTo: 'exception/404' },
    { path: '500', redirectTo: 'exception/500' }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SipCoreModule,
        RouterModule.forRoot(routes, { useHash: environment.useHash })
    ]
})
export class RoutesRoutingModule { }
