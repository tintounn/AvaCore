export class WaitGroup {
    private totalCounter: number = 0;
    private doneCounter: number = 0;
    private waitingFunc: any;

    constructor() { }

    add() {
        this.totalCounter++;
    }

    done() {
        this.doneCounter++;
        if(this.doneCounter >= this.totalCounter) {
            this.waitingFunc();
        }
    }

    wait(func: any) {
        this.waitingFunc = func;
    }
}