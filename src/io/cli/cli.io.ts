// import yargs from 'yargs/yargs';
import { dataType, IInputData, IIo, sorterStrategy } from "../io.type";
import { CliService } from './cli.service';

export class CliIO implements IIo {
    private cliService: CliService = new CliService();

    // constructor() {}

    async input(): Promise<IInputData> {
        const dataVariants: {[key: string]: dataType} = {
            'Collection of Numbers': 'numbersCollection', 
            'Text': 'string',
            'Linked List': 'linkedList'
        };
        const sorterVariants: {[key: string]: sorterStrategy} = {'Bubble Sort': 'bubbleSort'};

        const dataType = await this.cliService.list<dataType>('Input Data Type', dataVariants);
        const sorterStrategy = await this.cliService.list<sorterStrategy>('Sort Strategy', sorterVariants);

        return { dataType, sorterStrategy };
    }
    output(): void {
        throw new Error("Method not implemented.");
    }
}