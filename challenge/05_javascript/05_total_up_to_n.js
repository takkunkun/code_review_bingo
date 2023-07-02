// #5 ｎまでの合計
/**
 * 1 から n までを足すプログラム
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let n = parseInt(input, 10);
let ans = 0;
for (let i = 1; i <= n; i++) {
    ans += i;
}
console.log(ans);