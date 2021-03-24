"""
Basic using
"""
def func():
    print("Hello World!")
print(func())

"""
Using idth params and return data
"""
def sum(a, b):
    return a + b
print(sum(1, 2))

"""
Using func as param
"""
sumX = sum
print(sumX(5, 2))

"""
Unpacking params in func
"""
params = [1, 2, 3]
def volume(x, y, z):
    return x * y * z
print(volume(*params))

"""
Undefined num of params in func
"""
def factorial(*args):
    r = 1
    for n in args:
        r = r * n
    return r
print(factorial(1,2,3,4,5))

"""
Named params in func
"""
def say(hello, world):
    print("%s %s"%(hello, world))
say(hello="Hello", world="World!")