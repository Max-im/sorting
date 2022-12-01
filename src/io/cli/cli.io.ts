// import yargs from 'yargs/yargs';
import { dataType, IInputData, IIo, sorterStrategy } from "../io.type";
import { CliService } from './cli.service';


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

    // constructor() {}

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
    output(): void {
        throw new Error("Method not implemented.");
    }
}