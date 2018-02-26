import { Component, ViewContainerRef } from '@angular/core';
import { SipProvidePage, SipPage, SipAccess, SipAccessManager, Lib, SipAccessItem } from '@sip/sip-core/extends/extends.module';
import { MinitableManager } from '@sip/sip-shared/components/sip-components.module';
import { InstanceData } from '../../iaas-shared/model/instance-data';

@Component({
	selector: 'sip-instance-list',
	templateUrl: './instance-list.component.html',
	styles: [],
	providers: [...SipProvidePage(InstanceListComponent)]
})
export class InstanceListComponent extends SipPage {

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

	@SipAccess<InstanceListComponent>()
	accessManager: SipAccessManager;

	searchContent = {
		content: '',
		search: () => {
			this.tableManager1.search({ content: this.searchContent.content });
		}
	};

	/**table管理器 */
	tableManager1: MinitableManager<InstanceData> = new MinitableManager<InstanceData>({
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

	ctxTest() {
		let row = this.tableManager1.selectFristRow;
		console.log('ctxTest', row, row && row.data);
	}

	create() {
		this.$navigate('/sip/online/iaas/instance-create').subscribe(p => {
			if (!p) return;
			this.tableManager1.refresh();
		});
	}

	@SipAccessItem<InstanceListComponent>('startUp', {
		multi: false, hasData: true,
		check: function () {
			return true;
		}
	})
	startUp() {
		console.log('startUp');
	}

}
