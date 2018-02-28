import { Lib } from './lib';
import { Type } from '@angular/core';
import { HttpRequest, HttpHandler, HttpClient } from '@angular/common/http';

export abstract class SipAlainConfig {
    i18n: {
        prefix: string;
        suffix: string;
    };
    i18nLoader: (http: HttpClient)=> any;
    appDataPath: string;
    startup:()=>Promise<any>;
    intercept:(req: HttpRequest<any>, next: HttpHandler)=>any;
}

let _sipAlainConfig: Type<SipAlainConfig> = null;

export function SetSipAlainConfig(config: Type<SipAlainConfig>) {
    _sipAlainConfig = config;
};

export function GetSipAlainConfig():Type<SipAlainConfig> {
    return _sipAlainConfig
};