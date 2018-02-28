import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SipModal, SipProvideModal, SipNgInit } from 'app/sip-alain';

@Component({
  selector: 'sip-test-modal',
  templateUrl: './test-modal.component.html',
  styles: [],
	providers:[...SipProvideModal(TestModalComponent)]
})
export class TestModalComponent extends SipModal {

	constructor(vcf: ViewContainerRef) {
		super(vcf);
	}

  params = { id: '' }

  @SipNgInit()
  private _init() {
    this.params = this.$params(this.params);
  }

  save(event) {
    this.$uiLink.publish(true).close();
  }

}
