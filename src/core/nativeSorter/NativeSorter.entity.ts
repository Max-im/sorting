import { IOutput } from "../../io/output/output.type";
import { Sorter } from "../sorter/sorter.entity";

export class NativeSorter extends Sorter {
    data: any;

    constructor(data: any, output: IOutput) {
        super(output)
        this.data = data;
    }
    get length() {
        return this.data.length;
    }

    sort() {
        this.data.sort((a: any, b: any) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });
    }

    compare(): boolean {
        return true;
    }

    move(): void {

    }
}