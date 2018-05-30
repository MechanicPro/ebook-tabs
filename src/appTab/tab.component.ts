import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-tab',
    template: `
        <div class="tabDiv">
            <ng-content></ng-content>
        </div>`,
    styles: [`.tabDiv {
        background: #03d3ff;
        padding: 10px;
        border-radius: 20px;
    }`]
})

export class TabComponent {

}