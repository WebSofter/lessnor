"""
for - condition statement for loops
"""
basket = ["Молоко", "Сахар", "Масло", "Хлеб"]
for product in basket:
    print(product)

"""
while - condition infinity statement for loops
"""
st = 5
while st >= 0 :
    print(st)
    st = st - 1
    
"""
range(start, stop, step) - generatin list collection fo loops
"""
nums = list(range(0, 20, 2))
for num in nums:
    print(num)

"""
Output as key, value pair in for
"""
person = {"name": "David", "age": 31, "gender": 'male'}
for k, v in person.items():
    print(k, v)