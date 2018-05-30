import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {AppModuleTab} from './appTab/app.module';

platformBrowserDynamic().bootstrapModule(AppModuleTab).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherise, log the boot error
}).catch(err => console.error(err));