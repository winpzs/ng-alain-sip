import { Component, OnInit } from "@angular/core";

@Component({
    selector: "header-server",
    template: `
    <nz-dropdown nzTrigger="hover" nzPlacement="bottomRight">
        <div class="item" nz-dropdown>
            服务
        </div>
        <div nz-menu class="header-server animated ">
            <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
				<div class="server-nav">
					<ul>
						<li><a>弹性计算</a></li>
						<li><a>网络</a></li>
						<li><a>中间件</a></li>
						<li><a>数据库</a></li>
						<li><a>业务应用</a></li>
						<li><a>高级服务</a></li>
						<li><a>应用平台服务</a></li>
						<li><a>大数据服务</a></li>
					</ul>
				</div>

				<div class="server-content">
					<div class="tab-pane">
						<div class="singlemenu">
							<div class="singlemenuli">
								<dl>
									<dt>
										<i class="icon-desktop"></i>实例
									</dt>
									<dd>自助选择服务器配置、操作系统和网络配置快速创建虚拟机，实例也称云服务器、云主机</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
            </nz-spin>
        </div>
    </nz-dropdown>
  	`,
    styles: []
})
export class HeaderServerComponent implements OnInit {
    
    constructor() {}

    ngOnInit() {}
}
