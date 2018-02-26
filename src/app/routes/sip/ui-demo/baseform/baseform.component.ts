import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SipPage, SipProvidePage } from '@sip/sip-core/extends/extends.module';

@Component({
	selector: 'sip-baseform',
	templateUrl: './baseform.component.html',
	styles: [],
	providers:[...SipProvidePage(BaseformComponent)]
})
export class BaseformComponent extends SipPage {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}
	
	// 架构默认选择
	architecture = "A";

	// 版本
	editionoptions = [
		{ value: '2.0.0', label: '2.0.0' },
		{ value: '1.3.3', label: '1.3.0' },
		{ value: '1.0.2', label: '1.0.2', disabled: true }
	]
	edition = "2.0.0";

	// 项目
	projectsoptions = [
		{ value: 'project01', label: '广州市品高软件股份有限公司' },
		{ value: 'project02', label: '生产环境' },
		{ value: 'project03', label: '测试环境' }
	]

	// 区域
	areaoptions = [
		{ value: 'project01', label: '广州' },
		{ value: 'project02', label: '上海' },
		{ value: 'project03', label: '北京' }
	]

	// 网络
	networksoptions = [
		{ value: 'none', label: '无可用网络' }
	]

	// 小规格
	smspecification = [
		{ name: "master01", id:"SPI", spec:"2核、2G、100G" },
		{ name: "master01", id:"SPI", spec:"2核、2G、100G" },
		{ name: "master01", id:"SPI", spec:"2核、2G、100G" }
	]

	save(){
		this.$uiLink.publish(true).close();
	}

}
