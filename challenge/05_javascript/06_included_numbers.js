// #6 含まれる数字
/**
 * a_0 から a_i の i 個の数字の中に b_0 から b_j の j 個の数字が全て含まれていれば "Yes" 含まれていなければ "No" と出力するプログラム
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.trim().split('\n');
const aList = lines[0].trim().split(' ');
const bList = lines[1].trim().split(' ');

let found = true;
for (let num of bList) {
  if (!aList.includes(num)) {
    found = false;
    break;
  }
}

if (found) {
  console.log("Yes");
} else {
  console.log("No");
}