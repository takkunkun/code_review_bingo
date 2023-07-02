# #6 含まれる数字
"""a_0 から a_i の i 個の数字の中に b_0 から b_j の j 個の数字が全て含まれていれば "Yes" 含まれていなければ "No" と出力するプログラム"""
a_list = input().strip().split()
b_list = input().strip().split()

found = True
for num in b_list:
    if num not in a_list:
        found = False
        break

if found:
    print("Yes")
else:
    print("No")
