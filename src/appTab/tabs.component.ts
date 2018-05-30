import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'my-tabs',
    template: `
        <div class="tabsDiv">
            <ng-content></ng-content>
        </div>`,
    styles: [`.tabsDiv {
        border: 4px;
        background: #13ff8f;
        padding: 5px;
        border-radius: 50px;
    }`]
})
export class TabsComponent {
}