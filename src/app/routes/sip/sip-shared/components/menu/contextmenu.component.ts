import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ComponentRef, Input, ViewRef, EventEmitter, Output } from '@angular/core';
import { EventAfterViewInit, EventDestroy } from '@sip/sip-core/extends/decorators';
import { Lib } from '@sip/sip-core/extends/lib';
import { IMenuItem } from './menu-item';
import { SipAppContainerService } from '../../../../../custom-layout/sip/core/services/sip-app-container.service';

export interface IContextMenu {
    width?: string;
    items: IMenuItem[];
}

export declare function ContextMenuFactory(menu: IContextMenu): void;

@Component({
    selector: 'sip-contextmenu',
    template: `<ng-template #tmpl><div class="sip-contextmenu"
     [style.left]="_left" [style.top]="_top" (mousedown)="mousedown($event)" (click)="click($event)">
    <ng-content *ngIf="!menu" ></ng-content>
    <sip-menu *ngIf="menu" [width]="menu.width" [datas]="menu.items"></sip-menu>
  </div></ng-template>`,
    styles: [`.sip-contextmenu {position: absolute;z-index:10000;}`]
})
export class ContextmenuComponent {
    @ViewChild('tmpl') tmpl: TemplateRef<any>;

    constructor(private _viewRef: ViewContainerRef, private _vc: SipAppContainerService) {
    }

    private pElement: HTMLElement;

    @Input() menu: IContextMenu;
    @Input() menuFactory: typeof ContextMenuFactory

    _left = '0';
    _top = '0';

    mousedown(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    click(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        this.hide();
        return false;
    }

    @EventAfterViewInit()
    private init() {
        this.pElement = this._viewRef.element.nativeElement.parentNode;
        if (!this.pElement) return;
        this.pElement.addEventListener('contextmenu', this._contextmenu_fn);
        document.documentElement.addEventListener('mousedown', this._doc_mousedown);
    }

    private _contextmenu_fn = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        let factory = this.menuFactory;
        if (factory) {
            let menu: IContextMenu = { items: null };
            factory(menu);
            if (!menu.width) menu.width = '140px';
            if (!menu.items || !menu.items.length) return false;
            this.menu = menu;
        }

        this.show();
        let offset = Lib.offset(document.body);
        this._left = (e.pageX - offset.left) + 'px';
        this._top = (e.pageY - offset.top) + 'px';
        return false;
    }

    private _doc_mousedown = () => {
        this.hide();
    }

    @EventDestroy()
    _destroy() {
        if (!this.pElement) return;
        document.documentElement.removeEventListener('mousedown', this._doc_mousedown);
        this.pElement.removeEventListener('contextmenu', this._contextmenu_fn);
        this._container && this._container.destroy();
        this._container = null;
    }

    @Output() onShow: EventEmitter<any> = new EventEmitter<any>();

    _container: ViewRef;
    show() {
        let menu:any = {};
        this.onShow.emit(menu);
        this.menu = menu;
        if (!this._container)
            this._container = this._vc.appendTemplate(this.tmpl);
    }

    hide() {
        if (this._container){
            this._container.destroy();
            this._container = null;
        }
    }

}
