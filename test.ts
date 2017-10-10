import {WaitGroup} from './libs/wait-group/wait-group.lib';

let wg = new WaitGroup();

wg.wait(() => {
    console.log('All task done');
});

wg.add();
setTimeout(() => {
    console.log('Task 1 done');
    wg.done();
}, 1000);

wg.add();
setTimeout(() => {
    console.log('Task 2 done');
    wg.done();
}, 2000);

