# #5 ｎまでの合計
""" 1 から n までを足すプログラム"""
n = int(input())
ans = 0
for i in range(1, n + 1):
    ans += i
print(ans)
