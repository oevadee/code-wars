import math


def find_next_square(sq):
    num = math.sqrt(sq)
    if num.is_integer():
        return math.pow(num + 1, 2)
    else:
        return -1


print(find_next_square(121))
print(find_next_square(155))
