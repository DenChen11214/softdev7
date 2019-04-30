# def repeat(x):
#     def rep(n):
#         return x * n
#     return rep
# r1 = repeat("hello")
# r2 = repeat("goodbye")
# print(repeat("cool")(3))
# print(r1(2))
# print(r2(2))
#
#
# def outer():
#     x = "foo"
#     def inner():
#         nonlocal x
#         x = "bar"
#     inner()
#     return x
# print(outer())

def make_counter():
    n = 0
    def counter():
        nonlocal n
        n += 1
        return n
    return counter
ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())
