import {Component, OnInit, Input} from '@angular/core';
import {AppTab} from 'appTab/app.tab';

@Component({
    selector: 'content',
    template: `
        <div class="contentDiv">
            <p>Content in tab: <b>{{ numTab }}</b></p>
        </div>
    `,
    styles: [`.contentDiv {
        background: #03d3ff;
        padding: 10px;
        border-radius: 20px;
    }`]
})
export class Content {
    @Input() numTab;
}
