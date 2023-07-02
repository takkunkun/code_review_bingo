# #4 大きい方を出力
"""a と b の値の大きい方を出力するプログラム"""
a = int(input())
b = int(input())
ans = a
if a < b:
    ans = b
print(ans)
