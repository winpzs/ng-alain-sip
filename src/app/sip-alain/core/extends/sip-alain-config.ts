import { Lib } from './lib';
import { HttpClient } from '@angular/common/http';

export interface ISipAlainConfig {
    TranslateHttpLoaderFactory?:(http: HttpClient)=>any;
    [key: string]: any;
}

export const SipAlainConfig: ISipAlainConfig = {
    i18n: {
        prefix: 'assets/i18n/',
        suffix: '.json'
    }
};

export function SetSipAlainConfig(config: ISipAlainConfig) {
    Lib.extend(SipAlainConfig, config);
};
