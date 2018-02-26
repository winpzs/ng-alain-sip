import { Component, ViewContainerRef } from '@angular/core';
import { Lib, SipProvidePage, SipPage, SipWatch, SipNgInit, SipSubscribe, SipNgDestroy, SipInject } from '@sip/sip-core/extends/extends.module';
import { TestService } from '../test-shared/test.service';

@Component({
    selector: 'sip-test-list',
    templateUrl: './test-list.component.html',
    styles: [],
    providers: [...SipProvidePage(TestListComponent)]
})
export class TestListComponent extends SipPage {

    constructor(vcf: ViewContainerRef) {
        super(vcf);
    }

    title = "test list";
    title1 = "test list";
    changeTitle() {
        this.title = Lib.makeAutoId();
        this._testSrv.getInstanceDetail({instanceId:''}).subscribe((p)=>{p.datas.Zone_ID;})
    }

    changeTitle1() {
        this.title1 = Lib.makeAutoId();
    }

    @SipWatch('this.title', ['this.title', 'this.title1'])
    private _watchTitle(title, title1) {
        console.log('SipWatch', title, title1);
    }

    @SipInject(TestService)
    private _testSrv:TestService;

    @SipNgInit()
    private _init() {
        console.log('init TestListComponent');
        this._testSubscribe();
        this.$publish('test-list.testsubs', { a: 1 });
        this.$publish('TestService.test', {a:1111}, true);

        this._testSrv.$publish('TestService.test', { a: 1111 });
    }

    private _testSubscribe() {
        let key = 'aaaa';
        this.$subscribe(key).subscribe((p) => { console.log('111', p); });
        this.$subscribe(key, (p) => { console.log('2222', p); });
        this.$publish(key, '_testSubscribe');
    }

    @SipSubscribe('test-list.testsubs')
    private _testSubscribe1(p: any) {
        console.log('_testSubscribe1', p);
    }

    navigate() {
        this.$navigate('/sip/ui-demo/table');
    }

    @SipNgDestroy()
    private _destroy() {
        console.log('destroy TestListComponent')
    }


}
