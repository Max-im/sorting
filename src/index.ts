'use strict';

import { CliIO } from './io/cli/cli.io';
import { Logger } from './core/logger/logger';
import { Data } from './core/data/data.entity';
import { SortBridbe } from './core/sortBridge/sortBridbe.executer';
import { NumberBubbleSorter } from './core/sorterStrategies/bubbleSorter/numberBubbleSorter.entity';
import { NativeSorter } from './core/sorterStrategies/nativeSorter/NativeSorter.entity'; 

const appLogger = new Logger();

class App {
    async run() {
        try {
            appLogger.info('App start');
            const cli = new CliIO();
            const inputData = await cli.input();
            appLogger.info('Receive CLI Data');
            appLogger.info(inputData);
            
            const data = (new Data()).data(inputData.dataType);
            appLogger.info('Generate Data');
            appLogger.info(data);

            const sorter = new SortBridbe(NumberBubbleSorter, NativeSorter, data, cli);
            sorter.execute();
        } catch(err: any) {
            appLogger.error(err.message);
        }

    }
}

const app = new App();

app.run();
