import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SipAlainModule, SetSipAlainConfig } from './sip-alain';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { RoutesRoutingModule } from '@routes/routes-routing.module';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { LayoutModule } from './layout/layout.module';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

SetSipAlainConfig({
    TranslateHttpLoaderFactory:function(http: HttpClient){
        return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
    }
});

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ...SipAlainModule.forRoot(),
        CoreModule,
        SharedModule,
        LayoutModule,
        RoutesRoutingModule,
        CustomLayoutModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    exports: [
        LayoutModule,
        CustomLayoutModule
    ]
})
export class AppModule { }
