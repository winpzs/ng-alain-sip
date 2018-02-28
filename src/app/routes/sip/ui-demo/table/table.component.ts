import { Component, ViewContainerRef } from '@angular/core';

import { SipProvidePage, SipPage, Lib, SipSubscribe, SipAccessManager, SipAccessItem, SipAccess } from 'app/sip-alain';
import { MinitableManager } from 'app/sip-alain';

import { TestModalComponent } from './test-modal/test-modal.component';
import { TableData } from '../ui-demo-shared/model/table-data';

@Component({
	selector: 'sip-table',
	templateUrl: './table.component.html',
	styles: [],
	providers: [...SipProvidePage(TableComponent)]
})
export class TableComponent extends SipPage {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}

	nzdata = [
		{
			num: "i-81520D9D",
			name: "mysql",
			status: "processing",
			statusname: "运行中",
			region: "开发云",
			ip: "10.202.131.39",
			spec: "2核2G",
			user: "开发账号",
			date: "2017-11-15"
		},
		{
			num: "i-81520D9D",
			name: "mysql",
			status: "processing",
			statusname: "运行中",
			region: "开发云",
			ip: "10.202.131.39",
			spec: "2核2G",
			user: "开发账号",
			date: "2017-11-15"
		},
		{
			num: "i-81520D9D",
			name: "mysql",
			status: "processing",
			statusname: "运行中",
			region: "开发云",
			ip: "10.202.131.39",
			spec: "2核2G",
			user: "开发账号",
			date: "2017-11-15"
		},
		{
			num: "i-81520D9D",
			name: "mysql",
			status: "processing",
			statusname: "运行中",
			region: "开发云",
			ip: "10.202.131.39",
			spec: "2核2G",
			user: "开发账号",
			date: "2017-11-15"
		}
	];

	@SipAccess<TableComponent>({
		reboot: {
			multi: false, hasData: true,
			check: function () {
				console.log('reboot');
				return true;
			}
		}
	})
	accessManager: SipAccessManager;

	searchContent = {
		content: '',
		search: () => {
			this.tableManager1.search({ content: this.searchContent.content });
		}
	};

	/**table管理器 */
	tableManager1: MinitableManager<TableData> = new MinitableManager<TableData>({
		datas: this.nzdata,
		onSearch: (searchParams: object) => {
			Lib.extend(searchParams, {
				content: '', status: ''
			});
		},
		/** 过滤器设置 */
		filters: {
			/**列名 */
			Status: {
				items: [
					{ text: '运行中', value: 'processing' },
					{ text: '停机', value: 'stopped' }
				],
				onFilter(p) {
					console.log('filters', p);
					let values = p.values;
					this.search({ status: values.join(',') });
					this.search();
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
					title: row.isEdit ? '保存状态' : '编辑状态',
					disabled: false,
					onClick: (p) => {
						this.editStatus();
					}
				},
				{ divider: true },
				{
					title: '测试',
					onClick: (p) => { alert(data.name); }
				}
			];
		}
	});

	editStatus() {
		let rows = this.tableManager1.rows;
		if (rows.length) {
			let isEdit = rows[0].isEdit;
			let indexs = rows.map(row => row.index);
			this.tableManager1.editCell(indexs, [2], !isEdit);
		}
	}

	add() {
		let url = '/sip/ui-demo/create';
		this.$navigate(url, {}).subscribe((p) => {
			if (!p) return;
			console.log(url, p);
		});
	}

	@SipAccessItem('reboot')
	reboot() {
		this.add();
	}

	@SipAccessItem<TableComponent>('shutdown', {
		multi: false, hasData: true,
		check: function () {
			return true;
		}
	})
	shutdown() {
		this.startUp();
	}

	@SipAccessItem<TableComponent>('startUp', {
		multi: false, hasData: true,
		check: function () {
			return true;
		}
	})
	startUp() {
		this.$modal(TestModalComponent, { id: Lib.makeAutoId() }).subscribe((p) => {
			if (!p) return;
			console.log('TestModalComponent', p);
		});
	}
}
