import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppTab} from './app.tab';
import {Content} from './content.component';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppTab, Content, TabsComponent, TabComponent],
    bootstrap: [AppTab]
})
export class AppModuleTab {
}
