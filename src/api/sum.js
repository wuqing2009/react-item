import { money } from './money';

export function sum(arr) {
    let sum=0;
    arr.map(val=>{
        if (val.onOff) {
            sum+=val.price*val.num
        }
    })
    return sum
}