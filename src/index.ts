'use strict';
import { NumberBubbleSorter } from './core/bubbleSorter/numberBubbleSorter.entity';
import { NativeSorter } from './core/nativeSorter/NativeSorter.entity';
import { CliOutput } from './io/cli/cli.output';
import { IOutput } from './io/output/output.type';

class App {
    run() {
        const data = [1,8,5];
        const nativeSorter = new NativeSorter(data, this.getOutput());
        // const customSorter = new NumberBubbleSorter([...data], this.getOutput());
        console.log(nativeSorter.data)
        nativeSorter.sort();
        console.log(nativeSorter.data)
        console.log('run')
    }
    private getOutput(): IOutput {
        return new CliOutput()
    }
}

const app = new App();

app.run();
