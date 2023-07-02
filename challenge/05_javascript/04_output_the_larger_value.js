// #4 大きい方を出力
/**
 * a と b の値の大きい方を出力するプログラム
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const inputs = input.split('\n');
let a = parseInt(inputs[0], 10);
let b = parseInt(inputs[1], 10);
let ans = a;
if (a < b) {
   ans = b;
}
console.log(ans);