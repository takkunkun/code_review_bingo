// #2 BINGO!表示
/**
 * 「BINGO!」と n 回改行区切りで出力するプログラム
*/
let message = "BINGO!";
const input = require('fs').readFileSync('/dev/stdin', 'utf8')
let n = parseInt(input, 10);
for (let i = 1; i <= n; i++) {
    console.log(message);
}