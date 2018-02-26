import { Component, ViewContainerRef } from '@angular/core';
import { SipPage, SipProvidePage } from '@sip/sip-core/extends/extends.module';

@Component({
	selector: 'sip-instance-create',
	templateUrl: './instance-create.component.html',
	styleUrls:['./instance-create.component.less'],
	providers:[...SipProvidePage(InstanceCreateComponent)]
})
export class InstanceCreateComponent extends SipPage {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}

	// 分步骤
	current = 0;

	index = 'First-content';

	pre() {
		this.current -= 1;
	}

	next() {
		this.current += 1;
	}

	done() {
		this.$uiLink.publish(true).close();
	}

	// 项目
	projectoptions = [
		{ value: 'project01', label: '广州市品高软件股份有限公司' },
		{ value: 'project02', label: '生产环境' },
		{ value: 'project03', label: '测试环境' }
	]
	project = "project01";

	
	// 公网带宽
	netchecked = false;

	netslider01 = "0";
	LineNetCheckopt = [
		{ value: 'project01', label: 'hubj' },
		{ value: 'project02', label: '电信' },
		{ value: 'project03', label: '联通' }
	]
	LineNetCheck = "project01";

	// 安全组
	SecurityGroupData =[
		{ value: 'val01', label: 'default' },
		{ value: 'val02', label: '安全组01' },
		{ value: 'val03', label: '安全组02' },
		{ value: 'val04', label: '安全组03' },
		{ value: 'val05', label: '安全组04' },
		{ value: 'val06', label: '安全组05' },
		{ value: 'val07', label: '安全组06' },
		{ value: 'val08', label: '安全组07' },
		{ value: 'val09', label: '安全组08' }
	]

	// 配置
	cpuconfigDate =[
		{ value: 'val01', label: '1核2G' },
		{ value: 'val02', label: '1核4G' },
		{ value: 'val03', label: '2核2G' },
		{ value: 'val04', label: '2核4G' },
		{ value: 'val05', label: '2核6G' },
		{ value: 'val06', label: '4核4G' },
		{ value: 'val07', label: '4核8G' },
		{ value: 'val08', label: '4核16G' },
		{ value: 'val09', label: '8核8G' }
	]
	systemnum = "ami-A685C84D";
	systemnameData = [
		{ value: 'epch', label: 'EPCH' },
		{ value: 'yun', label: '云存储' },
		{ value: 'zaibei', label: '灾备云存储BingoFS' }
	]
	systemname = "zaibei";

	SecretKeyData = [
		{ value: 'none', label: '不指定秘钥' },
		{ value: 'yun', label: '秘钥afbuc' },
		{ value: 'zaibei', label: '秘钥你的知识' }
	]

	Password = "A";
	Passwordnum = "A";
	_password(value){
		this.Passwordnum = value;
	}
	

	passnujData = [
		{ value: 'none', label: '随机密码' },
		{ value: 'yun', label: '制定密码' }
	]
	passnuj = "none";

	isDisabled = "true"


	isVisible = false;

	showModal = () => {
		this.isVisible = true;
	}

	handleOk = (e) => {
		console.log('点击了确定');
		this.isVisible = false;
	}

	handleCancel = (e) => {
		console.log(e);
		this.isVisible = false;
	}
}
