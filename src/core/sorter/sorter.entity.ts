'use strict';

import { IOutput } from "../../io/output/output.type";
import { ISortable } from "./sorter.type";

export abstract class Sorter implements ISortable {
    private output: IOutput;
    abstract compare(index: number): boolean;
    abstract move(index: number): void;
    abstract length: number;
    abstract data: any;

    constructor(output: IOutput) {
        this.output = output;
    }

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j)) {
                    this.move(j);
                }
            }
        }
    }

    getResult(): void {
        this.output.out();
    }
}
