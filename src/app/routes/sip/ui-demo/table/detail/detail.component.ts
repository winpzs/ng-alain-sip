import { Component, ViewContainerRef } from '@angular/core';
import * as moment from 'moment';
import { AdChartsModule } from '@delon/abc';
import { SipPage, SipProvidePage, SipNgInit } from '@sip/sip-core/extends/extends.module';


@Component({
	selector: 'sip-detail',
	templateUrl: './detail.component.html',
	styles: [],
	providers: [...SipProvidePage(DetailComponent)]
})
export class DetailComponent extends SipPage {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}

	params = { id: '' };
	@SipNgInit()
	private _init() {
		this.params = this.$params(this.params);
	}

	nzdata = [
		{
			name: "管理员网络",
			mac: "D0:0D:81:52:0D:9D",
			ip: "10.202.131.39",
			sip: "10.202.131.28"
		},
		{
			name: "管理员网络01",
			mac: "D0:0D:81:52:0D:8D",
			ip: "10.202.131.45",
			sip: "10.202.131.131"
		}
	];

	inboxdata = [
		{
			name: "ceshivolume(vol-CF7C7F54)",
			type: "数据盘",
			inbox: "云存储",
			status: "success",
			statusname: "使用中",
			size: "1G"
		},
		{
			name: "ceshivolume(vol-CF7C7F54)",
			type: "数据盘",
			inbox: "云存储",
			status: "success",
			statusname: "使用中",
			size: "1G"
		},
		{
			name: "ceshivolume(vol-CF7C7F54)",
			type: "数据盘",
			inbox: "云存储",
			status: "success",
			statusname: "使用中",
			size: "1G"
		}
	];

	// 图表数据
	salesData: any[] = [];

	@SipNgInit()
	private _initChart() {
		for (let i = 0; i < 12; i += 1) {
			this.salesData.push({
				x: `${i + 1}月`,
				y: Math.floor(Math.random() * 1000) + 200
			});
		}
	}

}