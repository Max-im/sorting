'use strict';

import { CliIO } from './io/cli/cli.io';
import {Logger} from './core/logger/logger';
const rootLogger = new Logger();


// import { NumberBubbleSorter } from './core/bubbleSorter/numberBubbleSorter.entity';
// import { NativeSorter } from './core/nativeSorter/NativeSorter.entity';

class App {
    async run() {
        // const data = [1,8,5];
        // const nativeSorter = new NativeSorter(data, this.getOutput());
        // const customSorter = new NumberBubbleSorter([...data], this.getOutput());
        const cli = new CliIO();
        const data = await cli.input();

        rootLogger.info({one: 'two'});
        rootLogger.warn('warn');
        rootLogger.error('error');
        
    }
}

const app = new App();

app.run();
