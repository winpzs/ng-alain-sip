import { Injectable } from '@angular/core';

@Injectable()
export class SipConfigService {

    constructor() { }

    site = {
        loginUrl: '/themes/metronic/modules/common/login/login_sso.jsp?returnUrl=',
        logoutUrl: ''
    };

    page = {
        /**只有一个子页面 */
        onceChild: true,
        /** 关闭时自动关闭子页面 */
        autoCloseChild: true
    };

    rest = {
        /**
         * rest url 改造路径
         */
        mapPath: function (path) {
            return path;
        },
        /**
         * 提交类型form | body
         */
        postType: 'form',
        /**
         * 字典接口
         */
        dict: 'api/basicData/getDictionaryItems',
        /**
         * rest 数据结构改造
         */
        map: function (rs): {
            "version": number,//版本号
            "returnCode": number,//返回code，200为成功
            "returnValue": null,//返回数据内容
            "returnStatus": string,//返回状, "OK" | "WARNING" | "ERROR" | "ABORT"（内部取消） | "LEGAL_USER"(用户已经退出)
            "returnDesc": string,//用于UI的提示信息
            "error": string//用于浏览开发控制log的信息
        } {
            return rs;
        },
        sql: {
            /**
             * sql数据，有分页
             */
            pageList: 'api/basicData/loadGridData',
            /**
             * sql数据，无分页
             */
            list: 'api/basicApi/getList',
            /**
             * sql数据，返回实体
             */
            entity: 'api/basicApi/getEntity',
            /**
             * sql原始数据，返回实体， 如boolean会返回0|1
             */
            entityEx: 'api/basicApi/getEntityEx',
            /**
             * 执行sql
             */
            execute: 'api/basicApi/execute',
            /**
             * 新增sql记录，返回新增的实体
             */
            insert: 'api/basicApi/insert'
        }
    };

    minitable = {
        /**
         * 页面记录数
         */
        pageSize: 10,
        multiSelect: true,
        /**
         * 选择模式，分别是操作模式(operate)和选择模式(select)
         */
        selectMode: 'operate'
    };

}
