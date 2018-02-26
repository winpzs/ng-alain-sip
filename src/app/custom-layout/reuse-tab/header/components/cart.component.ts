import { Component, OnInit } from "@angular/core";

@Component({
    selector: "header-cart",
    template: `
	<div class="item">
		<nz-badge [nzCount]="3">
			<ng-template #content>
				<i class="fa fa-shopping-cart"></i>
			</ng-template>
		</nz-badge>
	</div>
  	`,
    styles: []
})
export class HeaderCartComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
