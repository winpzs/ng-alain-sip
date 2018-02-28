import { Component, ViewContainerRef } from '@angular/core';
import { SipProvidePage, SipPage, SipAccess, SipAccessManager, Lib, SipAccessItem, SipOnShow } from 'app/sip-alain';
import { MinitableManager } from 'app/sip-alain';
import { ListData } from './../ui-demo-shared/model/list-data';

@Component({
	selector: 'sip-demo-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.less'],
	providers: [...SipProvidePage(ListComponent)]
})
export class ListComponent extends SipPage {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}

	TagDatas = [
		{
			id: '1',
			name: 'Tag01',
			children: [
				{
					subid: '11',
					name: '张三'
				},
				{
					subid: '11',
					name: '李四'
				}
			]
		}, {
			id: '1',
			name: 'Tag01',
			children: [
				{
					subid: '11',
					name: '张三'
				},
				{
					subid: '11',
					name: '李四'
				}
			]
		}, {
			id: '1',
			name: 'Tag01',
			children: [
				{
					subid: '11',
					name: '张三'
				},
				{
					subid: '11',
					name: '李四'
				}
			]
		}, {
			id: '1',
			name: 'Tag01',
			children: [
				{
					subid: '11',
					name: '张三'
				},
				{
					subid: '11',
					name: '李四'
				}
			]
		}, {
			id: '1',
			name: 'Tag01',
			children: [
				{
					subid: '11',
					name: '张三'
				},
				{
					subid: '11',
					name: '李四'
				}
			]
		}
	]

	@SipAccess<ListComponent>()
	accessManager: SipAccessManager;

	searchContent = {
		content: '',
		search: () => {
			this.tableManager1.search({ content: this.searchContent.content });
		}
	};

    @SipOnShow()
    private _show() {
        this.tableManager1.search();
    }

	/**table管理器 */
	tableManager1: MinitableManager<ListData> = new MinitableManager<ListData>({
		connstr: 'iaas',
		sqlId: 'iaas_Instance.List.GetByOwnerID',
		multiSelect: true,
		//datas: this.nzdata,
		onSearch: (searchParams: object) => {
			Lib.extend(searchParams, {
				content: '',
				RegionID: '', projectId: '',
				elStatus: 'active', tag: '',
				Status: '', "Status2": "shutting-down,terminated"
			});
		},
		/** 过滤器设置 */
		filters: {
			/**列名 */
			Status: {
				items: [
					{ text: '运行中', value: 'running' },
					{ text: '停机', value: 'stopped' }
				],
				onFilter(p) {
					let values = p.values;
					let params = { elStatus: '', Status: '' }
					if (values.length > 0) {
						params.elStatus = '';
						params.Status = values.join(',');
					} else {
						params.elStatus = 'active';
						params.Status = values.join(',');
					}
					this.search(params);
				}
			}
		},
		/**初始化时触发，表示table已经可以使用 */
		onInit() {
			console.log('onInit tableManager');
		},
		/**选择改变时触发 */
		onSelectChanged: (rows) => {
			this.accessManager.check(this.tableManager1.selectDatas);
		},
		/**每次数据加载完成后并处理table业务时触发 */
		onCompleted() {
			console.log('onCompleted');
		},
		contextmenu: (menu, rows) => {
			if (!rows.length) { menu.items = []; return; };
			let row = rows[0], data = row.data;
	
			menu.items = [
				{
					title: '测试',
					disabled: false,
					onClick: (p) => {
						this.ctxTest();
					}
				}
			];
		}
	});

	@SipAccessItem<ListComponent>('access', {
		multi: false, hasData: true,
		check: function () {
			return true;
		}
	})
	editCell(rowIndexs, colIndexs, isEdit){
		this.tableManager1.editCell(rowIndexs, colIndexs, isEdit);
	}

	ctxTest() {
		let row = this.tableManager1.selectFristRow;
		console.log('ctxTest', row, row && row.data);
		alert(row.data.Instance_Code);
	}

	add() {
		this.$navigate('/sip/ui-demo/instance-create', { page: 1 }).subscribe(r => {
			console.log('receive', r);
			this.tableManager1.refresh();
		});
	}

	@SipAccessItem<ListComponent>('startUp', {
		multi: false, hasData: true,
		check: function () {
			return true;
		}
	})
	startUp() {
		console.log('startUp');
	}
}
