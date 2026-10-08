let n: number = 10;
let t1: number = 0;
let t2: number = 1;

console.log(`First ${n} terms of Fibonacci series:`);

for (let i = 1; i <= n; ++i) {
    console.log(t1);
    let sum = t1 + t2;
    t1 = t2;
    t2 = sum;
}
