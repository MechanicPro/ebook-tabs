import {Component} from '@angular/core';

@Component({
    selector: 'my-app-tab',
    templateUrl: './app.tab.html',
    styleUrls: ['./app.tab.css']
})

export class AppTab {
    public tabs = [1, 2, 3];
    numTab: number;
    showHide: boolean;

    constructor() {
        this.numTab = 1;
        this.showHide = true;
    }

    selectTab(tab: number) {
        this.numTab = tab;
        this.showHide = true;
    }

    public dec() {
        this.tabs = this.tabs.slice(0, -1);
        this.numTab = 1;
        if (this.tabs.length == 0)
            this.showHide = false;
        else
            this.showHide = true;
    }

    public inc() {
        this.tabs = [...this.tabs, (this.tabs.length + 1)];
        this.showHide = true;
    }
}
