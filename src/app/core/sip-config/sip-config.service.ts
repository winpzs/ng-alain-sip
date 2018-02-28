import { Injectable, Injector } from '@angular/core';
import { SipAlainConfig } from '../../sip-alain';
import { HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { mergeMap, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReuseTabService, ReuseTabMatchMode } from '@delon/abc';

@Injectable()
export class SipConfigService implements SipAlainConfig {

    constructor(private injector: Injector) { }

    appDataPath = 'assets/app-data.json';

    i18n = {
        prefix: 'assets/i18n/',
        suffix: '.json'
    };

    i18nLoader(http: HttpClient) {
        return new TranslateHttpLoader(http, this.i18n.prefix, this.i18n.suffix);
    }

    startup() {
        let reuseTabSrv: ReuseTabService = this.injector.get(ReuseTabService);
        reuseTabSrv.mode = ReuseTabMatchMode.URL;
        return Promise.resolve(null);
    }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下假如响应体的 `status` 若不为 `0` 表示业务级异常
                // 并显示 `error_message` 内容

                // const body: any = event instanceof HttpResponse && event.body;
                // if (body && body.status !== 0) {
                //     this.msg.error(body.error_message);
                //     // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //     // this.http.get('/').subscribe() 并不会触发
                //     return ErrorObservable.throw(event);
                // }
                break;
            case 401: // 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/${event.status}`);
                break;
        }
        return of(event);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): any {

        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = environment.SERVER_URL + url;
        }

        const newReq = req.clone({
            url: url
        });
        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                if (event instanceof HttpResponse && event.status === 200)
                    return this.handleData(event);
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err))
        );
    }
}
