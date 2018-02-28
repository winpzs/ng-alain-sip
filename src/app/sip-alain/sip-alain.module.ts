import { NgModule, Optional, SkipSelf, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonModule } from './delon/delon.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// angular i18n
import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SimpleInterceptor } from '@delon/auth';
import { DefaultInterceptor } from './delon/net/default.interceptor';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from './delon/i18n/i18n.service';
import { SipAlainConfig } from './core/extends/sip-alain-config';
registerLocaleData(localeZhHans);
import { StartupService } from './delon/startup/startup.service';
// i18n


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return SipAlainConfig.TranslateHttpLoaderFactory(http);
}

export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}

@NgModule({
    imports: [
        CommonModule,
        DelonModule,
        // i18n
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'zh-Hans' },
        { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
        { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
    exports: [
        DelonModule
    ]
})
export class SipAlainModule {
    constructor(@Optional() @SkipSelf() parentModule: SipAlainModule) {
        if (parentModule) {
            throw new Error(`SipAlainModule has already been loaded. Import Core modules in the AppModule only.`);
        }
    }

    static forRoot(): any {
        return [
            HttpClientModule,
            {
                ngModule: SipAlainModule,
                providers: []
            }
        ];
    }

}