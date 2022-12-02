// import yargs from 'yargs/yargs';
import { dataType } from "../../core/data/data.type";
import { IInputData, IIo, IOutputData, sorterStrategy } from "../io.type";
import { CliService } from './cli.service';
import { Logger } from "../../core/logger/logger";

const logger = new Logger();

const dataVariants: {[key: string]: dataType} = {
    'Collection of Numbers': 'numbersCollection', 
    'Text': 'string',
    'Linked List': 'linkedList'
};
const sorterVariants: {[key: string]: sorterStrategy} = {
    'Bubble Sort': 'bubbleSorter',
    'Native JS Sort': 'nativeSorter',
};
export class CliIO implements IIo {
    private cliService: CliService = new CliService();

    async input(): Promise<IInputData> {
        const dataType = await this.cliService.list<dataType>('Input Data Type', dataVariants);
        const sorterStrategy = await this.cliService.list<sorterStrategy>('Sort Strategy', sorterVariants);

        const secondSortData: {[key: string]: sorterStrategy} = {};
        for (const key in sorterVariants) {
            if (sorterVariants[key] !== sorterStrategy) {
                secondSortData[key] = sorterVariants[key];
            }
        }
        const secondSorterStrategy = await this.cliService.list<sorterStrategy>('Compare with Sort Strategy', secondSortData);

        return { dataType, sorterStrategy, secondSorterStrategy };
    }

    output(data: IOutputData): void {
        if (data.timing1 > data.timing2) {
            logger.info(`Second Strategy faster on ${Math.round((data.timing1 / data.timing2 - 1) * 100)}%`);
        } else {
            logger.info(`First Strategy faster on ${Math.round((data.timing2 / data.timing1 - 1) * 100)}%`);
        }
    }
}