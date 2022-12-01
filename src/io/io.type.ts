export type dataType = 'string' | 'numbersCollection' | 'linkedList';

export type sorterStrategy = 'bubbleSorter' | 'nativeSorter';

export interface IInputData {
    dataType: dataType
    sorterStrategy: sorterStrategy
    secondSorterStrategy: sorterStrategy
}

export interface IIo {
    input(): IInputData | Promise<IInputData>;
    output(): void;
}