'use strict';

import { Sorter } from '../sorter/sorter.entity';

export class NumberBubbleSorter extends Sorter {
    data: any;

    constructor(data: any) {
        super();
        this.data = data;
    }

    get length() {
        return this.data.length;
    }

    compare(index: number) :boolean {
        return this.data[index] > this.data[index + 1];
    }

    move(index: number): void {
        [this.data[index], this.data[index + 1]] = [this.data[index + 1], this.data[index]];
    }
}
