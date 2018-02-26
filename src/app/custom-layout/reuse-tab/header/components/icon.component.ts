import { Component } from '@angular/core';

@Component({
    selector: 'header-icon',
    template: `
    <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
        <div class="item" nz-dropdown>
            <i class="anticon anticon-appstore-o"></i>
        </div>
        <div nz-menu class="wd-xl animated ">
            <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
                <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
					<div nz-col [nzSpan]="6">
						<span class="bg-error text-white">
							<i class="fa fa-file-text-o "></i>
						</span>
                        <small>工单</small>
					</div>
					<div nz-col [nzSpan]="6">
						<span class="bg-teal text-white">
							<i class="fa fa-tasks "></i>
						</span>
                        <small>订单</small>
                    </div>
					<div nz-col [nzSpan]="6">
						<span class="bg-success text-white">
							<i class="fa fa-rss"></i>
						</span>
                        <small>操作日志</small>
                    </div>
					<div nz-col [nzSpan]="6">
						<span class="bg-purple-7 text-white">
							<i class="fa fa-desktop"></i>
						</span>
                        <small>配置管理</small>
                    </div>
                </div>
            </nz-spin>
        </div>
    </nz-dropdown>
    `
})
export class HeaderIconComponent {

    loading = true;

    change() {
        setTimeout(() => this.loading = false, 500);
    }

}
