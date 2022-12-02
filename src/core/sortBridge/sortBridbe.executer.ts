// import { Sorter } from "../sorterStrategies/sorter/sorter.entity";
import { performance } from 'perf_hooks';
import { IIo, IOutputData } from '../../io/io.type';
import { Logger } from "../logger/logger";

const bridgeLogger = new Logger();

export class SortBridbe {
    private sortStrategy: any;
    private secondStrategy: any;
    private data: any;
    private io: IIo;

    constructor(sortStrategy: any, secondStrategy: any, data: any, io: IIo) {
        this.sortStrategy = sortStrategy;
        this.secondStrategy = secondStrategy;
        this.data = data;
        this.io = io;
    }

    execute(): void {
        const timing1 = this.run(this.sortStrategy);
        const timing2 = this.run(this.secondStrategy);
        this.io.output({timing1, timing2});
    }

    private run(strategy: any) {
        const start = performance.now();
        const times = 1000000;
        
        for (let i = 0; i < times; i++) {
            const sorter = new strategy([...this.data]);
            sorter.sort();
        }

        const end = performance.now();

        bridgeLogger.info(end - start);
        return end - start;
    }
}
