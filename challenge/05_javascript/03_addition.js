// #3 足し算
/**
 * スペース区切りで与えられる2つの整数 a と b を足して出力するプログラム
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.trim().split(' ');

let a = parseInt(values[0], 10);
let b = parseInt(values[1], 10);
console.log(a + b);