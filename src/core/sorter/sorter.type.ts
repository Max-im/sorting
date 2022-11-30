export interface ISortable {
    length: number;
    compare(index: number): boolean;
    move(index: number): void;
    getResult(): void;
}