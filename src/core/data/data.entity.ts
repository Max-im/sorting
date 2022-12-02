'use strict';

import { dataType } from "./data.type";
import { Logger } from "../logger/logger";

const dataLogger = new Logger();

export class Data {
    data(type: dataType) {
        if (type === 'numbersCollection') return this.getNumbersArrData();
        if (type === 'linkedList') return this.getLinkedList();
        if (type === 'string') return this.getStringData();

        dataLogger.error(`Unknown data type: ${type}`);
        throw new Error(`Unknown data type: ${type}`);
    }

    private getRandomInt(from: number = 1, to: number = 100): number {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    private getNumbersArrData() {
        const arr = [];
        const len = this.getRandomInt(50);

        for (let i = 0; i < len; i++) {
            const val = this.getRandomInt();
            arr.push(val);
        }

        return arr;
    }

    private getStringData() {}

    private getLinkedList() {}

}