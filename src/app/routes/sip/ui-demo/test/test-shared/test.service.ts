import { Injectable, Injector } from '@angular/core';
import { SipService, SipSubscribe, SipRestDef, SipRestFunction, SipRestMethod, SipRestDictDef, SipRestDictFunction, SipRestSqlDef, SipRestSqlType, SipRestSqlFunction } from '@sip/sip-core/extends/extends.module';
import { Test } from './test';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestService extends SipService {

    constructor(injector: Injector) {
        super(injector);
    }

    @SipSubscribe('TestService.test')
    private _testServiceSubscribe(p) {
        console.log('_testServiceSubscribe', p);
        this.getInstanceDetail({ instanceId: '62968b70-3d6c-4c41-a39a-b56659497ad5' }, { owner: this }).subscribe((rs) => {
            console.log('getInstanceDetail', rs.datas);
        });
        this.getInstanceDetailPost({ instanceId: '62968b70-3d6c-4c41-a39a-b56659497ad5' }, { owner: this }).subscribe((rs) => {
            console.log('getInstanceDetail', rs.datas);
        });
        this.getInstanceList({ Content: 'a' }, { owner: this }).subscribe((rs) => {
            console.log('getInstanceList', rs.datas);
        });
        this.getProjectBizType({ owner: this }).subscribe((rs) => {
            console.log('getProjectBizType', rs.datas);
        });
    }

    @SipRestDef<Test>({
        url: 'api/instance/getInstanceDetail',
        method: SipRestMethod.GET,
        cache: false,
        map: function (rs) {
            rs.datas.Instance_Code = 'aaaaaaaaaaaaaaa';
            console.log('map', rs);
            return rs;
        }
    })
    getInstanceDetail: SipRestFunction<{ instanceId: string }, Test>;

    @SipRestDef<Test>({
        url: 'api/instance/getInstanceDetail',
        method: SipRestMethod.POST,
        cache: false
    })
    getInstanceDetailPost: SipRestFunction<{ instanceId: string }, Test>;

    @SipRestSqlDef({
        sqlType: SipRestSqlType.PageList,
        connstr: 'iaas',
        sqlId: 'Iaas_Instance.List.GetByOwnerID',
        searchparam: { "Content": "", "RegionID": "", "projectId": "", "elStatus": "active", "tag": "", "instanceIds": "", "Status": "", "Status2": "shutting-down,terminated", "BizStatus": "" }
    })
    getInstanceList: SipRestSqlFunction<{
        "Content"?: string,
        "RegionID"?: string, "projectId"?: string,
        "elStatus"?: string, "tag"?: string,
        "instanceIds"?: string, "Status"?: string,
        "Status2"?: string, "BizStatus"?: string
    }, Test>;

    @SipRestDictDef({ code: 'projectBizType', cache: true })
    getProjectBizType: SipRestDictFunction

}
