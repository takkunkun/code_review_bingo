# #7 文字の並べ替え
"""長さが n の 2 つの文字列 S と T が各文字を並び替えると同じになる場合は ""Yes"" 同じでない場合は ""No"" と出力するプログラム"""
n = int(input())
S = input()
T = input()
if sorted(S) == sorted(T):
    print("Yes")
else:
    print("No")
