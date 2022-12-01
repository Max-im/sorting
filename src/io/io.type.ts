export type dataType = 'string' | 'numbersCollection' | 'linkedList';

export type sorterStrategy = 'bubbleSort';

export interface IInputData {
    dataType: dataType
    sorterStrategy: sorterStrategy
}

export interface IIo {
    input(): IInputData | Promise<IInputData>;
    output(): void;
}