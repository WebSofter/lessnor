"""
Basic list
"""
players = [45, 25, 12, '445']
print(players)
for player in players:
    print(player)

"""
 + - Summ two and more lists
"""
players = players + [99, 88, 44]
print(players)

"""
 .append() - Append new item to list end
"""
players.append(25)
print(players)

"""
 :n, n:, m:n - Cut from and to element with number n(For example :2 - this is all from 1 to 2, and cuted all)
"""
print(players[:2])

"""
Empty or replace specify items in list
"""
players[:2] = [1,2,3]
print(players)

"""
Empty all items in list
"""
players[:] = []
print(players)
